from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all$', views.get_all_links),
    
]