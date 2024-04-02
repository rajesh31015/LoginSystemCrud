# root url
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('customers/',include('customers.urls')),
    path('products/',include('products.urls'))
]


# app url products
from . import views
from django.urls import path

urlpatterns = [
    path('',views.result)
]