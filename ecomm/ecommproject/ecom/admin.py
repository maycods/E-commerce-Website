from django.contrib import admin
from ecom.models import Produit,client,Images,Category,order,promotion,user 
admin.site.register(Produit)
admin.site.register(Category)
admin.site.register(user)
admin.site.register(client)
admin.site.register(promotion)
admin.site.register(Images)
admin.site.register(order)

# Register your models here.
