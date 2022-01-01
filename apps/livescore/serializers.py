from rest_framework import serializers
from .models import LiveScore


class LiveScoreSerializer(serializers.ModelSerializer):

    class Meta:
        model = LiveScore
        fields = "__all__"
