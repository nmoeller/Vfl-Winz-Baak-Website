from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all$', views.get_all_teams),
    url(r'^id/(?P<team_id>\w+)$', views.get_team),
    url(r'^id/(?P<team_id>\w+)/players$', views.get_players_for_team),
]