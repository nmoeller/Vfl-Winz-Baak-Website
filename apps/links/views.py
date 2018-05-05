from django.shortcuts import render
from .models import Link
from .serializers import LinkSerializer
from django.http import HttpResponse, JsonResponse


def get_all_links(request):
    links = Link.objects.all()
    serializer = LinkSerializer(links, many=True)
    return JsonResponse(serializer.data, safe=False)



