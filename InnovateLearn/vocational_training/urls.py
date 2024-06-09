from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('level/<str:level_name>/', views.level, name='level'), 
    path('level/letters/', views.random_letters, name='random_letters'),
    path('level/basic_words/', views.basic_words, name='basic_words'),
    path('send-test-email/', views.send_test_email, name='send_test_email'),  # Define URL pattern for send-test-email
]
