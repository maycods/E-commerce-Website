from rest_framework import serializers

from .models import Article

class ArticleSerialzer(serializers.ModelSerializer):
    class Meta :
        model = Article
        fields = ('pk', 'name', 'price', 'registrationDate')