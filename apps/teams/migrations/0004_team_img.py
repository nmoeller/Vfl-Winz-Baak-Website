# Generated by Django 2.0 on 2018-03-09 22:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('teams', '0003_auto_20180303_1235'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='img',
            field=models.ImageField(blank=True, null=True, upload_to='team_imgs'),
        ),
    ]
