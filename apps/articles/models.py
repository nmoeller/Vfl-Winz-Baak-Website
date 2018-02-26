from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Article(models.Model):

    title = models.CharField(max_length=200)
    content = RichTextUploadingField()
    img = models.ImageField(blank=True, null=True, upload_to="static/media/uploads/article_imgs")

    def __str__(self):
        return self.title
