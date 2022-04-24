from django.forms import models
from django.shortcuts import render
from django.http import HttpResponse, request, HttpResponseRedirect
from djangoProject import settings

# Create your views here.


def index(request):
    return render(request, 'index.html')

def power(request):
    return render(request, 'power.html')

