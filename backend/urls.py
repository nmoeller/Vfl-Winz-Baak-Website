from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.contrib import admin
from .views import HomeView
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
    url('.*$', HomeView.as_view(), name="home"),
]

urlpatterns += staticfiles_urlpatterns()
