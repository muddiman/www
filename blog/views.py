# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import Post
# Create your views here.

"""
posts = [
    {
        'author': '.muddicode',
        'title': 'First Blog Post',
        'content': 'This is a test.',
        'date_posted': 'November 22, 2018'
    },
    {
        'author': 'Roger A. Clarke',
        'title': '2nd Blog Post',
        'content': 'This is also a test.',
        'date_posted': 'December 25, 2018'
    }
]
"""

def home(request):
    context = {
        'posts': Post.objects.all()
    }
    return render(request, 'blog/home.html', context)

def about(request):
    return render(request, 'blog/about.html')
