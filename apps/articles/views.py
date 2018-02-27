from django.shortcuts import render
from .models import Article
from .serializers import ArticleSerializer
from django.http import HttpResponse, JsonResponse


def get_all_articles(request):
    articles = Article.objects.all()
    serializer = ArticleSerializer(articles, many=True)
    return JsonResponse(serializer.data, safe=False)


def get_article(request, article_id):
    article = Article.objects.filter(id=article_id)
    serializer = ArticleSerializer(article, many=True)
    return JsonResponse(serializer.data, safe=False)
