# Generated by Django 2.0 on 2018-03-04 15:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('marquee', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='marquee',
            name='text',
            field=models.CharField(max_length=200),
        ),
    ]