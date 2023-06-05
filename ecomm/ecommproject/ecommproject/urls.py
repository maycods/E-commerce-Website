"""ecommproject URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from ecom import views
from django.contrib import admin
from django.urls import path, include, re_path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("products/", views.get_products),
    path("clients/", views.get_clients),
    path("products/<int:pk>", views.get_product),
    # path('products/category/<string:cat>'),
    path("postproducts/", views.create_product),
    path("clients/", views.get_clients),
    path("orders/", views.get_orders),
    path("orders/<int:pk>", views.get_order),
    path("postorder/", views.create_order),
    path("putorder/<int:pk>", views.update_order),
    path("deleteorder/<int:pk>", views.delete_order),
    # re_path(r'^api/article/([0-9])$', views.update_article),
]
