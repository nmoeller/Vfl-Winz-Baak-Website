from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Link(models.Model):

    text = models.CharField(max_length=200)
    link = models.CharField(max_length=200)
    

    def __str__(self):
        return self.text

