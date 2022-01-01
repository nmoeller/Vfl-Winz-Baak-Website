import uuid
from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class LiveScore(models.Model):

    guestName = models.CharField(max_length=200)
    guestScore = models.IntegerField(blank=True, null=True)
    homeName = models.CharField(max_length=200)
    homeScore = models.IntegerField(blank=True, null=True)
    scoreboard_id =  models.IntegerField(blank=True, null=True)


   
