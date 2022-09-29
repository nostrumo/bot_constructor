from django.contrib import admin
from .models import *
admin.site.register(CustomUser)
admin.site.register(TagList)
admin.site.register(MetaData)
admin.site.register(Bots)
# Register your models here.
