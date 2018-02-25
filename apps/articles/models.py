from django.db import models
from tinymce.models import HTMLField


class Article(models.Model):

    title = models.CharField(max_length=200)
    content = HTMLField()
    img = models.ImageField(blank=True, null=True, upload_to="static/img/article_imgs")

    def __str__(self):
        return self.title
