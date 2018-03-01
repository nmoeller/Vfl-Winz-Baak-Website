from django.shortcuts import render
from .models import Team, Player
from .serializers import TeamSerializer, PlayerSerializer
from django.http import HttpResponse, JsonResponse


def get_all_teams(request):
    teams = Team.objects.all()
    serializer = TeamSerializer(teams, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_team(request, team_id):
    team = Team.objects.filter(id=team_id)
    serializer = TeamSerializer(team, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_players_for_team(request, team_id):
    team = Team.objects.filter(id=team_id)

    playerIds = team.values_list("player", flat=True)
    players = Player.objects.filter(id__in = playerIds)

    serializer = PlayerSerializer(players, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_all_players(request):
    players = Player.objects.all()
    serializer = PlayerSerializer(players, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_player(request, player_id):
    player = Player.objects.filter(id=player_id)
    serializer = PlayerSerializer(player, many=True)
    return JsonResponse(serializer.data, safe=False)
