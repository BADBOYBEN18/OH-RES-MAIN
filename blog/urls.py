from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BlogPostViewSet, TransactionViewSet, radar_stats

router = DefaultRouter()
router.register(r'posts', BlogPostViewSet)
# router.register('blogs', BlogViewSet)
router.register('transactions', TransactionViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('', include(router.urls)),

]

urlpatterns = [
    
]

