from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^about', views.about, name='about'),
    url(r'^projects', views.projects, name='projects'),
    url(r'^$', views.index, name='index'),
]