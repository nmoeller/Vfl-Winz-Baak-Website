from django.db import models


class Team(models.Model):

    name = models.CharField(max_length=200)
    league = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class Player(models.Model):

    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    position = models.IntegerField()

    team = models.ManyToManyField("Team")

    def __str__(self):
        return self.last_name + ", " + self.first_name