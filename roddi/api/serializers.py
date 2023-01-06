from rest_framework import serializers
from .models import User, Estate, Item, Comment


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email', 'isAdmin', 'password')


class EstateSerializer(serializers.ModelSerializer):
    # members = UserSerializer(many=True);
    class Meta: 
        model = Estate 
        fields = ('id', 'name', 'members', 'alert')


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'name', 'estateID', 'assign', 'description')


class CommentSerializer(serializers.ModelSerializer):
    #author = UserSerializer(read_only=True)

    class Meta:
        model = Comment
        fields = ('id', 'itemID', 'content', 'visible',
                  'upVotes', 'downVotes', 'author')


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'name', 'password')
