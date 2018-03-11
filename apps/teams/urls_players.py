from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all$', views.get_all_players),
    url(r'^id/(?P<player_id>\w+)$', views.get_player),
    url(r'^trainer', views.get_trainer_players),
    url(r'^ansprechpartner', views.get_ansprechpartner_players)
]
