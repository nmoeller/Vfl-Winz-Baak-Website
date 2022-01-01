from django.conf.urls import url
from django.views.decorators.csrf import csrf_exempt
from . import views

urlpatterns = [
    url(r'^all$', views.get_all_livescores),
    url(r'^update/(?P<livescore_id>\w+)$', csrf_exempt(views.update_livescore)),
    
]