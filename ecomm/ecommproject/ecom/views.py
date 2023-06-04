from rest_framework.decorators import api_view
from django.forms import model_to_dict
from django.http import JsonResponse
from .models import Produit,order,client
from .serializers import *
from django.http import JsonResponse
from django.http import JsonResponse


@api_view(['GET'])
def get_products(request):
    products = Produit.objects.all()
    data = {'produits': list(products.values())}
    return JsonResponse(data)

@api_view(['GET'])
def get_clients(request):
    clt = client.objects.all()
    data = {'clients': list(clt.values())}
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
    print(product_data)#
    #data=object()
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


@api_view(['GET'])
def get_orders(request):
    products = order.objects.all()
    data = {'orders': list(products.values())}
    return JsonResponse(data)

@api_view(['GET'])
def get_order(request, pk):
    try:
        product = order.objects.get(pk=pk)
        data = {'order': model_to_dict(product)}
        return JsonResponse(data)
    except order.DoesNotExist:
        return JsonResponse({'error': 'Product not found'}, status=404)

@api_view(['POST'])
def create_order(request):
    order_data = request.data
    order_data['produitref'] = Produit.objects.get(id=order_data['produitref']['id'])
    order_data['customerref'] = client.objects.get(id=order_data['customerref']['id'])
    ordeer = order.objects.create(**order_data)
    data = {'order': model_to_dict(ordeer)}
    return JsonResponse(data, status=201)

@api_view(['PUT'])
def update_order(request, pk):
    try:
        ordeer = order.objects.get(pk=pk)
        order_data = request.data
        order_data['produitref'] = Produit.objects.get(id=order_data['produitref']['id'])
        order_data['customerref'] = client.objects.get(id=order_data['customerref']['id'])
        for key, value in order_data.items():
            setattr(ordeer, key, value)
        ordeer.save()
        data = {'order': model_to_dict(ordeer)}
        return JsonResponse(data)
    except order.DoesNotExist:
        return JsonResponse({'error': 'order not found'}, status=404)

@api_view(['DELETE'])
def delete_order(request, pk):
    try:
        ordeer = order.objects.get(pk=pk)
        ordeer.delete()
        return JsonResponse({}, status=204)
    except order.DoesNotExist:
        return JsonResponse({'error': 'order not found'}, status=404)


