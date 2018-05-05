from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.contrib import admin
from .views import HomeView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns



urlpatterns = [
    path('admin', admin.site.urls),
    url(r'^articles/', include('apps.articles.urls')),
    url(r'^links/', include('apps.links.urls')),
    url(r'^marquee/', include('apps.marquee.urls')),
    url(r'^teams/', include('apps.teams.urls_teams')),
    url(r'^email/', include('apps.send_email.urls')),
    url(r'^players/', include('apps.teams.urls_players')),
    url('.*$', HomeView.as_view(), name="home"),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),
   
]

urlpatterns += staticfiles_urlpatterns()
