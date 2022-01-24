# Generated by Django 2.0.2 on 2022-01-23 14:26

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('livescore', '0002_livescore_scoreboard_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='livescore',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='livescore',
            name='updated_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
