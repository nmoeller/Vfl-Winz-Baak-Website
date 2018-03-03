from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^latest$', views.get_latest_marquee),
    
]