from django.shortcuts import render
from .models import Article
from .serializers import ArticleSerializer
from django.http import HttpResponse, JsonResponse


def get_all_articles(request):
    articles = Article.objects.all()
    serializer = ArticleSerializer(articles, many=True)
    return JsonResponse(serializer.data, safe=False)
