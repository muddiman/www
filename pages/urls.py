<<<<<<< HEAD
from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^contact', views.contact, name='contact'),
    url(r'^projects', views.projects, name='projects'),
    url(r'^about', views.about, name='about'),
]
=======
from django.conf.urls import url, include
from . import views

urlpatterns = [
    url(r'^about', views.about, name='pages-about'),
    url(r'^projects', views.projects, name='pages-projects'),
    url(r'^new-page', views.new_page, name='pages-new-page'),
    url(r'^map', views.map, name='pages-map'),
    url(r'^$', views.index, name='index'),
]
>>>>>>> bug-fix
