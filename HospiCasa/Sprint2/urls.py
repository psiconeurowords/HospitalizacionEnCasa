from django.urls import path
from . import views

urlpatterns = [
    path('home', views.home, name='home'),
    path('nuevopaciente', views.nuevopaciente, name='nuevopaciente'),
    path('nuevofamiliar', views.nuevofamiliar, name='nuevofamiliar'),
    path('LeerTodosLosPacientes', views.LeerTodosLosPacientes, name='LeerTodosLosPacientes'),
    path('nuevomedico', views.nuevomedico, name='nuevomedico'),
]