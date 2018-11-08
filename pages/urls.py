from django.conf.urls import url
from django.contrib import admin
from . import views

urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^contact', views.contact, name='contact'),
    url(r'^projects', views.projects, name='projects'),
    url(r'^about', views.about, name='about'),
]
