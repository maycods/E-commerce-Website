from rest_framework.decorators import api_view
from django.forms import model_to_dict
from django.http import JsonResponse
from .models import Produit
from .serializers import *
from django.http import JsonResponse
from django.http import JsonResponse


@api_view(['GET'])
def get_products(request):
    products = Produit.objects.all()
    data = {'produits': list(products.values())}
    return JsonResponse(data)

@api_view(['GET'])
def get_product(request, pk):
    try:
        product = Produit.objects.get(pk=pk)
        data = {'produit': model_to_dict(product)}
        return JsonResponse(data)
    except Produit.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

@api_view(['POST'])
def create_product(request):
    product_data = request.data
    product = Produit.objects.create(**product_data)
    data = {'produit': model_to_dict(product)}
    return JsonResponse(data, status=201)

@api_view(['PUT'])
def update_product(request, pk):
    try:
        product = Produit.objects.get(pk=pk)
        product_data = request.data
        for key, value in product_data.items():
            setattr(product, key, value)
        product.save()
        data = {'produit': model_to_dict(product)}
        return JsonResponse(data)
    except Produit.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

@api_view(['DELETE'])
def delete_product(request, pk):
    try:
        product = Produit.objects.get(pk=pk)
        product.delete()
        return JsonResponse({}, status=204)
    except Produit.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

