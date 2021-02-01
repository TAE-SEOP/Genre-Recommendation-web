from django.db import models

# # Create your models here.
# from django.db import models
#
class Movie(models.Model):
    name = models.CharField(max_length=50)
    descript = models.TextField()
    example = models.TextField()
    movie_image = models.TextField()
    def __str__(self):
        return [self.id, self.name, self.descript]

        
