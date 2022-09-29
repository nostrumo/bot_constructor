from django.conf import settings
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser
import uuid


class CustomUser(AbstractUser):
    location = models.CharField(max_length=30, blank=True)
    company = models.CharField(max_length=30, blank=True)
    phone = models.CharField(max_length=30, unique=True)
    country = models.CharField(max_length=5, blank=True)
    role = models.CharField(max_length=30, blank=False)
    USERNAME_FIELD = 'phone'
    REQUIRED_FIELDS = ['username']

    # add additional fields in here

    def __str__(self):
        return self.username


class TagList(models.Model):
    tag_name = models.CharField(max_length=20)

    def __str__(self):
        return self.tag_name


class MetaData(models.Model):
    subscribers = models.IntegerField()
    files = models.IntegerField()
    activity = models.IntegerField()
    left_subscribers = models.IntegerField()



class Bots(models.Model):
    id = models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True)
    author = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    description = models.CharField(max_length=200)
    functionality = models.TextField()
    tags = models.ForeignKey(TagList, on_delete=models.CASCADE)
    created_date = models.DateTimeField(default=timezone.now)
    metadata = models.OneToOneField(MetaData, on_delete=models.CASCADE)

    def publish(self):
        self.published_date = timezone.now()
        self.save()
