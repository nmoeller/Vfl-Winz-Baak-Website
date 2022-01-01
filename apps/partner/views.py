from django.shortcuts import render
from .models import Partner
from .serializers import PartnerSerializer
from django.http import HttpResponse, JsonResponse


def get_all_partner(request):
    partner = Partner.objects.all()
    serializer = PartnerSerializer(partner, many=True)
    return JsonResponse(serializer.data, safe=False)



