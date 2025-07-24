from django.shortcuts import render

# Create your views here.
# views.py
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from django.db.models import Count, Sum, Avg, F
from django.utils import timezone
from datetime import datetime, timedelta, date
from .models import SiteVisit, Transaction, RevenueMetrics, UsageMetrics
from .serializers import (
    SiteVisitSerializer, TransactionSerializer, DashboardDataSerializer,
    ActivityGraphSerializer, StatCardsSerializer, UsageRadarSerializer
)
import json
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.http import JsonResponse

def get_client_ip(request):
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    if x_forwarded_for:
        ip = x_forwarded_for.split(',')[0]
    else:
        ip = request.META.get('REMOTE_ADDR')
    return ip

@api_view(['POST'])
@permission_classes([AllowAny])
def track_visit(request):
    """Track site visits in real-time"""
    try:
        data = request.data
        
        # Create visit record
        visit = SiteVisit.objects.create(
            session_id=data.get('session_id'),
            page_name=data.get('page_name'),
            device_type=data.get('device_type', 'web'),
            ip_address=get_client_ip(request),
            user_agent=request.META.get('HTTP_USER_AGENT', ''),
            user=request.user if request.user.is_authenticated else None
        )
        
        # Update or create usage metrics for today
        today = date.today()
        usage_metric, created = UsageMetrics.objects.get_or_create(
            date=today,
            page_name=data.get('page_name'),
            defaults={'mobile_users': 0, 'web_users': 0, 'total_users': 0}
        )
        
        if data.get('device_type') == 'mobile':
            usage_metric.mobile_users = F('mobile_users') + 1
        else:
            usage_metric.web_users = F('web_users') + 1
        
        usage_metric.total_users = F('total_users') + 1
        usage_metric.save()
        
        return JsonResponse({'status': 'success', 'visit_id': visit.id}, status=status.HTTP_201_CREATED)
    
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
@api_view(['POST'])
@permission_classes([AllowAny])
def update_visit_duration(request):
    """Update visit duration when user leaves page"""
    try:
        # Handle both JSON and form data
        if request.content_type == 'application/json':
            data = json.loads(request.body)
        else:
            data = request.POST
            
        visit_id = data.get('visit_id')
        duration = data.get('duration')
        
        visit = SiteVisit.objects.get(id=visit_id)
        visit.duration = duration
        visit.save()
        
        return JsonResponse({'status': 'success'})
    
    except SiteVisit.DoesNotExist:
        return JsonResponse({'error': 'Visit not found'}, status=404)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

@api_view(['GET'])
@permission_classes([AllowAny])
def dashboard_data(request):
    """Get all dashboard data"""
    try:
        # Activity Graph Data (Last 7 days)
        end_date = date.today()
        start_date = end_date - timedelta(days=6)
        
        activity_data = []
        for i in range(7):
            current_date = start_date + timedelta(days=i)
            
            # Get aggregated usage for this date
            daily_usage = UsageMetrics.objects.filter(date=current_date).aggregate(
                mobile=Sum('mobile_users') or 0,
                web=Sum('web_users') or 0
            )
            
            activity_data.append({
                'name': current_date.strftime('%b %d'),
                'mobile': daily_usage['mobile'] or 0,
                'web': daily_usage['web'] or 0
            })
        
        # Stat Cards Data
        today = date.today()
        thirty_days_ago = today - timedelta(days=30)
        sixty_days_ago = today - timedelta(days=60)
        year_ago = today - timedelta(days=365)
        
        # Current period metrics (last 30 days)
        current_transactions = Transaction.objects.filter(date__gte=thirty_days_ago)
        current_metrics = current_transactions.aggregate(
            gross_revenue=Sum('price') or 0,
            avg_order=Avg('price') or 0,
            total_orders=Count('id')
        )
        
        # Previous period for comparison (30-60 days ago)
        previous_transactions = Transaction.objects.filter(
            date__gte=sixty_days_ago,
            date__lt=thirty_days_ago
        )
        previous_metrics = previous_transactions.aggregate(
            gross_revenue=Sum('price') or 0,
            avg_order=Avg('price') or 0
        )
        
        # Trailing year
        trailing_year_total = Transaction.objects.filter(date__gte=year_ago).aggregate(
            total=Sum('price') or 0
        )['total']
        
        # Calculate percentage changes
        revenue_change = 0
        if previous_metrics['gross_revenue'] and previous_metrics['gross_revenue'] > 0:
            revenue_change = ((current_metrics['gross_revenue'] - previous_metrics['gross_revenue']) / previous_metrics['gross_revenue']) * 100
        
        avg_order_change = 0
        if previous_metrics['avg_order'] and previous_metrics['avg_order'] > 0:
            avg_order_change = ((current_metrics['avg_order'] - previous_metrics['avg_order']) / previous_metrics['avg_order']) * 100
        
        stat_cards = {
            'gross_revenue': float(current_metrics['gross_revenue']),
            'avg_order': float(current_metrics['avg_order']) if current_metrics['avg_order'] else 0,
            'trailing_year': float(trailing_year_total),
            'revenue_change': float(revenue_change),
            'avg_order_change': float(avg_order_change),
            'trailing_change': 60.75  # You can calculate based on your logic
        }
        
        # Usage Radar Data (Top 6 pages from last 30 days)
        radar_data = []
        top_pages = UsageMetrics.objects.filter(date__gte=thirty_days_ago)\
            .values('page_name')\
            .annotate(
                mobile=Sum('mobile_users') or 0,
                web=Sum('web_users') or 0,
                total=Sum('total_users') or 0
            ).order_by('-total')[:6]
        
        max_users = max([page['total'] for page in top_pages if page['total'] is not None]) if top_pages else 150
        
        for page in top_pages:
            radar_data.append({
                'subject': page['page_name'],
                'mobile': page['mobile'],
                'web': page['web'],
                'fullMark': max_users
            })
        
        # If no radar data exists, create dummy data
        if not radar_data:
            radar_data = [
                {'subject': 'Dashboard', 'mobile': 0, 'web': 0, 'fullMark': 150},
                {'subject': 'Analytics', 'mobile': 0, 'web': 0, 'fullMark': 150},
                {'subject': 'Settings', 'mobile': 0, 'web': 0, 'fullMark': 150},
            ]
        
        # Recent Transactions
        recent_transactions = Transaction.objects.all().order_by('-date')[:5]
        transactions_data = []
        for transaction in recent_transactions:
            transactions_data.append({
                'id': transaction.id,
                'customer_id': transaction.customer_id,
                'sku': transaction.sku,
                'price': str(transaction.price),
                'date': transaction.date.isoformat()
            })
        
        # Today's stats
        today_visits = SiteVisit.objects.filter(timestamp__date=today).count()
        unique_visitors = SiteVisit.objects.filter(timestamp__date=today)\
            .values('session_id').distinct().count()
        
        dashboard_response = {
            'activity_graph': activity_data,
            'stat_cards': stat_cards,
            'usage_radar': radar_data,
            'recent_transactions': transactions_data,
            'total_visits_today': today_visits,
            'unique_visitors_today': unique_visitors
        }
        
        return JsonResponse(dashboard_response)
    
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)

@api_view(['GET'])
@permission_classes([AllowAny])
def live_stats(request):
    """Get live statistics for real-time updates"""
    today = date.today()
    
    # Live stats
    live_data = {
        'visitors_online': SiteVisit.objects.filter(
            timestamp__gte=timezone.now() - timedelta(minutes=5)
        ).values('session_id').distinct().count(),
        'total_visits_today': SiteVisit.objects.filter(timestamp__date=today).count(),
        'unique_visitors_today': SiteVisit.objects.filter(timestamp__date=today)\
            .values('session_id').distinct().count(),
        'revenue_today': float(Transaction.objects.filter(date__date=today)\
            .aggregate(total=Sum('price'))['total'] or 0)
    }
    
    return JsonResponse(live_data)