# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from django.http import HttpResponse

def index(request):
    return render(request, "pages/index.html", {})

def contact(request):
    return render(request, "pages/contact.html", {})

def projects(request):
    return render(request, "pages/projects.html", {})

def about(request):
    return render(request, "pages/about.html", {})