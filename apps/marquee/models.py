from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Marquee(models.Model):

    text = RichTextUploadingField()
    

    def __str__(self):
        return self.text

