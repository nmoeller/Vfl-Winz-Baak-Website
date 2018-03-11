from rest_framework import serializers
from .models import Team, Player, Role


class TeamSerializer(serializers.ModelSerializer):

    class Meta:
        model = Team
        fields = "__all__"

class RoleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Role
        fields = "__all__"


class PlayerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Player
        depth = 1
        fields = "__all__"
