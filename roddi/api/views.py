from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CreateUserSerializer, UserSerializer, EstateSerializer, ItemSerializer, CommentSerializer
from .models import User, Estate, Item, Comment

# Create your views here.

# example function

# Api endpoint for users
class UserView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class EstateView(generics.ListCreateAPIView):
    queryset = Estate.objects.all()
    serializer_class = EstateSerializer


class ItemView(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer


class CommentView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer

    
class CreateUserView(APIView):
    serializer_class = CreateUserSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            name = serializer.data.get('name')
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            queryset = User.objects.filter(email=email)
            if queryset.exists():  # This email is already registered
                # conflict with the current state of the resource
                return Response(status=status.HTTP_409_CONFLICT)
            else:  # new user
                user = User(name=name, email=email, isAdmin=False, password=password)
                user.save()
                return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
