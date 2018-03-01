from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^all$', views.get_all_articles),
    url(r'^id/(?P<article_id>\w+)$', views.get_article)
]