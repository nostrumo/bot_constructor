from django.shortcuts import render, get_object_or_404
from .models import *


def projects_page(request):
    bots = Bots.objects.all()
    return render(request, 'bot_list.html', {'bots': bots})


def project(request, id):
    bot_uuid = get_object_or_404(Bots, id=id)
    return render(request, 'dashboard_page.html', {'bots': bot_uuid})


def project_edit(request, id):
    bot_uuid = get_object_or_404(Bots, id=id)
    return render(request, 'new_bot.html', {'bots': bot_uuid})


def price_page(request):
    price = Bots.objects.all()
    return render(request, 'pricing.html', {'price': price})


def new_bot(request):
    return render(request, 'new_bot.html')


def profile(request):
    return render(request, 'profile.html')
# Create your views here.
