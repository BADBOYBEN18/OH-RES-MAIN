# dashboard/management/commands/populate_dummy_data.py
# First create these directories: dashboard/management/ and dashboard/management/commands/
# Then create __init__.py files in both directories

from django.core.management.base import BaseCommand
from django.utils import timezone
from datetime import datetime, timedelta, date
from decimal import Decimal
import random
from data.models import Transaction, UsageMetrics, SiteVisit

class Command(BaseCommand):
    help = 'Populate database with dummy data for testing'

    def handle(self, *args, **options):
        self.stdout.write('Creating dummy data...')
        
        # Clear existing data
        Transaction.objects.all().delete()
        UsageMetrics.objects.all().delete()
        SiteVisit.objects.all().delete()
        
        # Create dummy transactions (last 60 days)
        self.stdout.write('Creating transactions...')
        for i in range(100):
            Transaction.objects.create(
                customer_id=f"#{random.randint(10000, 99999)}",
                sku=random.choice(['pro_1_month', 'pro_1_year', 'basic_1_month', 'basic_1_year']),
                price=Decimal(random.uniform(9.75, 299.99)),
                date=timezone.now() - timedelta(days=random.randint(0, 60))
            )

        # Create usage metrics for last 30 days
        self.stdout.write('Creating usage metrics...')
        pages = ['Dashboard', 'Analytics', 'Settings', 'Profile', 'Billing', 'Support', 'Reports', 'Users']
        for i in range(30):
            current_date = (datetime.now().date() - timedelta(days=i))
            for page in pages:
                mobile_users = random.randint(10, 100)
                web_users = random.randint(20, 150)
                UsageMetrics.objects.create(
                    date=current_date,
                    page_name=page,
                    mobile_users=mobile_users,
                    web_users=web_users,
                    total_users=mobile_users + web_users
                )

        # Create site visits for the last 7 days
        self.stdout.write('Creating site visits...')
        for i in range(500):
            visit_date = timezone.now() - timedelta(
                days=random.randint(0, 7),
                hours=random.randint(0, 23),
                minutes=random.randint(0, 59)
            )
            
            SiteVisit.objects.create(
                session_id=f"session_{random.randint(1000, 9999)}",
                page_name=random.choice(pages),
                device_type=random.choice(['web', 'mobile']),
                ip_address=f"192.168.1.{random.randint(1, 255)}",
                user_agent="Mozilla/5.0 (Test Browser)",
                timestamp=visit_date,
                duration=random.randint(30, 600)  # 30 seconds to 10 minutes
            )

        self.stdout.write(
            self.style.SUCCESS('Successfully created:')
        )
        self.stdout.write(f'- {Transaction.objects.count()} transactions')
        self.stdout.write(f'- {UsageMetrics.objects.count()} usage metrics')
        self.stdout.write(f'- {SiteVisit.objects.count()} site visits')


# # management/commands/populate_dummy_data.py
# from django.core.management.base import BaseCommand
# from django.utils import timezone
# from datetime import datetime, timedelta
# from decimal import Decimal
# import random
# from data.models import Transaction, UsageMetrics, SiteVisit

# class Command(BaseCommand):
#     help = 'Populate database with dummy data for testing'

#     def handle(self, *args, **options):
#         # Create dummy transactions
#         for i in range(50):
#             Transaction.objects.create(
#                 customer_id=f"#{random.randint(10000, 99999)}",
#                 sku=random.choice(['pro_1_month', 'pro_1_year', 'basic_1_month']),
#                 price=Decimal(random.uniform(9.75, 299.99)),
#                 date=timezone.now() - timedelta(days=random.randint(0, 30))
#             )

#         # Create usage metrics for last 30 days
#         pages = ['Dashboard', 'Analytics', 'Settings', 'Profile', 'Billing', 'Support']
#         for i in range(30):
#             current_date = (datetime.now().date() - timedelta(days=i))
#             for page in pages:
#                 UsageMetrics.objects.create(
#                     date=current_date,
#                     page_name=page,
#                     mobile_users=random.randint(10, 100),
#                     web_users=random.randint(20, 150),
#                     total_users=random.randint(30, 250)
#                 )

#         self.stdout.write(self.style.SUCCESS('Successfully populated dummy data'))