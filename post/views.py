from django.shortcuts import render
from .serializers import *
from rest_framework import generics
from rest_framework.generics import UpdateAPIView

class MovieDbCreate(generics.ListCreateAPIView):
    queryset=MovieDb.objects.all()
    serializer_class=MovieDbSerializer

class MovieDbUpdate(UpdateAPIView):
    queryset=MovieDb.objects.all()
    serializer_class=MovieDbSerializer


def test_html(requests):
    return render(requests, 'public/index.html',{})