from django.forms import models
from django.shortcuts import render
from django.http import HttpResponse, request, HttpResponseRedirect, JsonResponse
import os
from djangoProject import settings
from django.http import HttpResponseRedirect
from .form import UploadFileForm


# Create your views here.


def index(request):
    return render(request, 'index.html')


def upload(request):
    if request.method == 'POST':
        handle_uploaded_file(request.FILES['file'], str(request.FILES['file']))
        return HttpResponse("Successful")
    return HttpResponse("Failed")


def handle_uploaded_file(file, filename):
    upload_file_dir = 'static/upload/'
    if not os.path.exists(upload_file_dir):
        os.mkdir(upload_file_dir)

    with open(upload_file_dir + filename, 'wb+') as destination:
        for chunk in file.chunks():
            destination.write(chunk)

