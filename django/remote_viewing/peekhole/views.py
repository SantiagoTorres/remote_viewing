from django.shortcuts import render

from django.http import HttpResponse 
from peekhole.remote_browser import get_img_tag

# Create your views here.
def get(request):

    url = request.GET['target']

    return HttpResponse(get_img_tag(url))
