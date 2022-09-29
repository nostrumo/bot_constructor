from django.urls import path
from . import views

urlpatterns = [
    path('', views.home_page, name='home_page'),
    path('new_bot', views.new_bot, name='new_bot'),
]