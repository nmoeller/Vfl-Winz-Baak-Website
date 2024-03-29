# Generated by Django 2.0.2 on 2021-01-30 20:39

import ckeditor_uploader.fields
from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('partner', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='partner',
            name='link',
        ),
        migrations.RemoveField(
            model_name='partner',
            name='text',
        ),
        migrations.AddField(
            model_name='partner',
            name='content',
            field=ckeditor_uploader.fields.RichTextUploadingField(default='test'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='partner',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='partner',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to='article_imgs'),
        ),
        migrations.AddField(
            model_name='partner',
            name='title',
            field=models.CharField(default='test', max_length=200),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='partner',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='partner',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
