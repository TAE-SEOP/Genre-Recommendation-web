
from django.db import models

# Create your models here.
class MovieDb(models.Model):
    movie_name = models.CharField(max_length=20)
    movie_url = models.CharField(max_length=100)
    img_url = models.CharField(max_length=30)
    genre = models.CharField(max_length=20)

    class Meta:
        managed = False
        db_table = 'movie'