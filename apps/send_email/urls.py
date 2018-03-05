# send_email/urls.py
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^send$', views.send_form_email)
]