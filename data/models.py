# Create your models here.
# models.py
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import User
import uuid

class SiteVisit(models.Model):
    DEVICE_CHOICES = [
        ('web', 'Web App'),
        ('mobile', 'Mobile App'),
    ]
    
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    session_id = models.CharField(max_length=100)
    page_name = models.CharField(max_length=255)
    device_type = models.CharField(max_length=10, choices=DEVICE_CHOICES)
    ip_address = models.GenericIPAddressField()
    user_agent = models.TextField()
    timestamp = models.DateTimeField(default=timezone.now)
    duration = models.IntegerField(null=True, blank=True)  # seconds spent on page
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    
    class Meta:
        ordering = ['-timestamp']
        indexes = [
            models.Index(fields=['timestamp']),
            models.Index(fields=['page_name']),
            models.Index(fields=['device_type']),
        ]

class Transaction(models.Model):
    PLAN_CHOICES = [
        ('pro_1_month', 'Pro 1 Month'),
        ('pro_1_year', 'Pro 1 Year'),
        ('basic_1_month', 'Basic 1 Month'),
        ('basic_1_year', 'Basic 1 Year'),
    ]
    
    customer_id = models.CharField(max_length=20, unique=True)
    sku = models.CharField(max_length=20, choices=PLAN_CHOICES)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(default=timezone.now)
    user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, related_name="data_transactions")
    
    class Meta:
        ordering = ['-date']

class RevenueMetrics(models.Model):
    date = models.DateField(unique=True)
    gross_revenue = models.DecimalField(max_digits=12, decimal_places=2, default=0)
    avg_order_value = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    total_orders = models.IntegerField(default=0)
    
    class Meta:
        ordering = ['-date']

class UsageMetrics(models.Model):
    date = models.DateField()
    page_name = models.CharField(max_length=255)
    mobile_users = models.IntegerField(default=0)
    web_users = models.IntegerField(default=0)
    total_users = models.IntegerField(default=0)
    
    class Meta:
        unique_together = ['date', 'page_name']
        ordering = ['-date']