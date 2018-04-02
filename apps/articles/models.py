import uuid
from django.db import models
from ckeditor_uploader.fields import RichTextUploadingField


class Article(models.Model):

    title = models.CharField(max_length=200)
    content = RichTextUploadingField()
    img = models.ImageField(blank=True, null=True, upload_to="article_imgs")
    id = models.AutoField(primary_key=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def get_absolute_url(self):
        return str('/article?id='+self.id.__str__())
