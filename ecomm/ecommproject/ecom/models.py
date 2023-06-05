from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator


# Create your models here.
class Article(models.Model):
    name = models.CharField("Name", max_length=240)
    price = models.FloatField("price")
    registrationDate = models.DateField("Registration Date", auto_now_add=True)

    def __str__(self) -> str:
        return self.name


##################################################################################
class Category(models.Model):
    category = models.CharField(max_length=80)


class promotion(models.Model):
    promo = models.PositiveIntegerField(
        validators=[MinValueValidator(10), MaxValueValidator(70)]
    )
    titrep = models.CharField(max_length=30)
    descp = models.CharField(max_length=80)
    datedeb = models.DateField()
    datefin = models.DateField()


class Produit(models.Model):
    title = models.CharField(max_length=80)
    price = models.FloatField()
    description = models.CharField(max_length=440, default="description")
    categoryp = models.ForeignKey(
        "Category", on_delete=models.SET_NULL, null=True, related_name="+", blank=True
    )
    ratingt = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    stock = models.PositiveIntegerField()
    # promotionref = models.ForeignKey(
    #     "promotion", on_delete=models.SET_NULL, null=True, related_name="+", blank=True
    # )
    thumbnail = models.CharField(max_length=240)


class Images(models.Model):
    images = models.ImageField
    prdRef = models.ForeignKey(
        "Produit", on_delete=models.SET_NULL, null=True, related_name="+", blank=True
    )


class user(models.Model):
    username = models.CharField("username", max_length=15)
    psw = models.CharField("psw", max_length=60)


class client(user):
    name = models.CharField("Name", max_length=50)
    firstname = models.CharField("firstname", max_length=50, null=True)
    Telephone = models.CharField("Telephone", max_length=20, null=True)
    Mail = models.EmailField()


class order(models.Model):
    produitref = models.ForeignKey(
        "Produit", on_delete=models.SET_NULL, null=True, related_name="+", blank=True
    )
    customerref = models.ForeignKey(
        "client", on_delete=models.SET_NULL, null=True, related_name="+", blank=True
    )
    qte = models.PositiveIntegerField(
        validators=[MinValueValidator(1)]
    )  # max value is the store attribue in produit
    rating = models.PositiveIntegerField(
        validators=[MinValueValidator(1), MaxValueValidator(5)]
    )
    prixtotal = models.FloatField("price")  # attribut calculé
    unique_together = ("produitref", "customerref")
    dateorder = models.DateField()


class Dummy(models.Model):
    test = models.CharField(max_length=80)
