from django.shortcuts import render
from .models import Marquee
from .serializers import MarqueeSerializer
from django.http import HttpResponse, JsonResponse


def get_latest_marquee(request):
    marquees = Marquee.objects.all().order_by('-id').values()
    serializer = MarqueeSerializer(marquees, many=True)
    return JsonResponse(serializer.data, safe=False)



