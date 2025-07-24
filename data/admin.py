from django.contrib import admin

# Register your models here.
from .models import SiteVisit, Transaction, RevenueMetrics, UsageMetrics

@admin.register(SiteVisit)
class SiteVisitAdmin(admin.ModelAdmin):
    list_display = ['page_name', 'device_type', 'ip_address', 'timestamp', 'duration']
    list_filter = ['device_type', 'timestamp', 'page_name']
    search_fields = ['page_name', 'ip_address', 'session_id']
    readonly_fields = ['timestamp']

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ['customer_id', 'sku', 'price', 'date']
    list_filter = ['sku', 'date']
    search_fields = ['customer_id']

@admin.register(RevenueMetrics)
class RevenueMetricsAdmin(admin.ModelAdmin):
    list_display = ['date', 'gross_revenue', 'avg_order_value', 'total_orders']
    list_filter = ['date']

@admin.register(UsageMetrics)
class UsageMetricsAdmin(admin.ModelAdmin):
    list_display = ['date', 'page_name', 'mobile_users', 'web_users', 'total_users']
    list_filter = ['date', 'page_name']