from django.shortcuts import render
from .models import Team, Player
from .serializers import TeamSerializer, PlayerSerializer
from django.http import HttpResponse, JsonResponse


def get_all_teams(request):
    teams = Team.objects.all()
    serializer = TeamSerializer(teams, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_all_players(request):
    players = Player.objects.all()
    serializer = PlayerSerializer(players, many=True)
    return JsonResponse(serializer.data, safe=False)

