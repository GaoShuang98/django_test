from django.shortcuts import render
from django.http import HttpResponse, request

# Create your views here.

def index(request):
    return render(request, 'index.html')

def power(request):
    return render(request, 'power.html')

# def import_img(request):
#     return render(request, 'img_positioning.html')
#
# def target_positioning(request):
#     return render(request, 'target_positioning.html')