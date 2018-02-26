from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all$', views.get_all_teams),
    url(r'^players/all$', views.get_all_players),
]