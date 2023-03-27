from django.db import models

# Create your models here.
class Article (models.Model):
    name = models.CharField("Name", max_length=240)
    price = models.FloatField("price")
    registrationDate = models.DateField("Registration Date", auto_now_add=True)
    def __str__(self) -> str:
        return self.name

