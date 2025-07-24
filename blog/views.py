from rest_framework import viewsets, permissions
from .models import BlogPost, Transaction
from .serializers import BlogPostSerializer, TransactionSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser

class BlogPostViewSet(viewsets.ModelViewSet):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer
    permission_classes = [IsAdminUser]

    def get_queryset(self):
        return BlogPost.objects.all()

    def perform_create(self, serializer):
        # Add author if you have author field in BlogPost model
        serializer.save()  # Adjust if author field exists


class TransactionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [IsAdminUser]

    def get_queryset(self):
        return Transaction.objects.all()


@api_view(['GET'])
@permission_classes([IsAdminUser])
def radar_stats(request):
    # TODO: Replace dummy data with aggregated chat visits and transactions stats
    data = [
        {"subject": "Chat Visits", "chatVisits": 120, "transactions": 50},
        {"subject": "Jan", "chatVisits": 80, "transactions": 40},
        {"subject": "Feb", "chatVisits": 90, "transactions": 60},
        {"subject": "Mar", "chatVisits": 100, "transactions": 70},
    ]
    return Response(data)

