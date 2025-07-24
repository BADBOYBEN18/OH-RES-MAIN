# serializers.py
from rest_framework import serializers
from .models import SiteVisit, Transaction, RevenueMetrics, UsageMetrics
from django.db.models import Count, Sum, Avg
from django.utils import timezone
from datetime import datetime, timedelta

class SiteVisitSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteVisit
        fields = '__all__'
        read_only_fields = ['timestamp']

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = '__all__'
        read_only_fields = ['date']

class ActivityGraphSerializer(serializers.Serializer):
    name = serializers.CharField()
    mobile = serializers.IntegerField()
    web = serializers.IntegerField()

class StatCardsSerializer(serializers.Serializer):
    gross_revenue = serializers.DecimalField(max_digits=12, decimal_places=2)
    avg_order = serializers.DecimalField(max_digits=10, decimal_places=2)
    trailing_year = serializers.DecimalField(max_digits=12, decimal_places=2)
    revenue_change = serializers.FloatField()
    avg_order_change = serializers.FloatField()
    trailing_change = serializers.FloatField()

class UsageRadarSerializer(serializers.Serializer):
    subject = serializers.CharField()
    mobile = serializers.IntegerField()
    web = serializers.IntegerField()
    fullMark = serializers.IntegerField()

class DashboardDataSerializer(serializers.Serializer):
    activity_graph = ActivityGraphSerializer(many=True)
    stat_cards = StatCardsSerializer()
    usage_radar = UsageRadarSerializer(many=True)
    recent_transactions = TransactionSerializer(many=True)
    total_visits_today = serializers.IntegerField()
    unique_visitors_today = serializers.IntegerField()