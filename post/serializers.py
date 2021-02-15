from rest_framework import serializers
from .models import *

class MovieDbSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieDb
        fields='__all__'