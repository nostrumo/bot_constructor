from django.shortcuts import render
from .models import *


def home_page(request):
    bots = Bots.objects.all()
    return render(request, 'dashboard_page.html', {'bots': bots})

def new_bot(request):
    return render(request, 'new_bot.html')
# Create your views here.
