from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^landing_page', views.landing, name='pages-landing-page'),
    url(r'^about', views.about, name='pages-about'),
    url(r'^projects', views.projects, name='pages-projects'),
    url(r'^new-page', views.new_page, name='pages-new-page'),
    url(r'^map', views.map, name='pages-map'),
    url(r'^$', views.index, name='index'),
]