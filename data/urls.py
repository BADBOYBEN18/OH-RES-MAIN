from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('api/dashboard/', views.dashboard_data, name='dashboard_data'),
    path('api/live-stats/', views.live_stats, name='live_stats'),
    
    # Tracking endpoints
    path('api/track-visit/', views.track_visit, name='track_visit'),
    path('api/update-visit-duration/', views.update_visit_duration, name='update_visit_duration'),
]