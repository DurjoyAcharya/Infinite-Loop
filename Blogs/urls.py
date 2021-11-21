from os import name

from django.contrib import admin
from django.urls import path

from . import views

urlpatterns=[
    path('',views.home,name='home'),
    path('add',views.answer,name='add')
]
