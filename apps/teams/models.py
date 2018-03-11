from django.db import models


class Team(models.Model):

    name = models.CharField(max_length=200)
    league = models.CharField(max_length=200)
    link = models.CharField(max_length=200)
    img = models.ImageField(blank=True, null=True, upload_to="team_imgs")

    def __str__(self):
        return self.name


class Player(models.Model):

    first_name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200)
    positionMan = models.IntegerField(blank=True, null=True)
    positionYouth = models.IntegerField(blank=True, null=True)
    trainer= models.BooleanField(default=False)
    ansprechpartner= models.BooleanField(default=False)
    img = models.ImageField(blank=True, null=True, upload_to="player_imgs")

    team = models.ManyToManyField("Team")

    def __str__(self):
        return self.last_name + ", " + self.first_name
