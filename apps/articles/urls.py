from django.conf.urls import url
from . import views
from .sitemaps import ArticleSitemap
from django.contrib.sitemaps.views import sitemap

sitemaps = {
   'articles': ArticleSitemap()
}


urlpatterns = [
    url(r'^all$', views.get_all_articles),
    url(r'^id/(?P<article_id>\w+)$', views.get_article),
    url(r'^sitemap\.xml$', sitemap, {'sitemaps': sitemaps},
     name='django.contrib.sitemaps.views.sitemap')
    
]