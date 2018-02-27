from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all$', views.get_all_players),
    url(r'^id/(?P<player_id>\w+)$', views.get_player)
]