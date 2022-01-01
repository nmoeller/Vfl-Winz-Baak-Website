from django.shortcuts import render

from apps import livescore
from .models import LiveScore
from .serializers import LiveScoreSerializer
from django.http import HttpResponse, JsonResponse
from django.views.decorators.http import require_http_methods
import json



def get_all_livescores(request):
    articles = LiveScore.objects.all()
    serializer = LiveScoreSerializer(articles, many=True)
    return JsonResponse(serializer.data, safe=False)

@require_http_methods(["POST"])
def update_livescore(request,livescore_id):
    livescore = LiveScore.objects.filter(scoreboard_id=livescore_id)[0]
    print(livescore)
    body_unicode = request.body.decode('utf-8')
    data = json.loads(body_unicode)
    print(data)
    livescore.homeScore = data['homeScore']
    livescore.homeName = data['homeName']
    livescore.guestScore = data['guestScore']
    livescore.guestName = data['guestName']
    livescore.save()
    serializer = LiveScoreSerializer(livescore)
    return JsonResponse(serializer.data, safe=False)


