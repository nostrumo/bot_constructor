from django.urls import path
from . import views

urlpatterns = [
    path('projects', views.projects_page, name='projects'),
    path('', views.projects_page, name='projects'),
    path('project/<str:id>', views.project, name='project'),
    path('edit/<str:id>', views.project_edit, name='project_edit'),
    path('pricing', views.price_page, name='pricing'),
    path('new_bot', views.new_bot, name='new_bot'),
    path('profile', views.profile, name='profile'),
]