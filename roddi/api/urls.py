from django.urls import path
from .views import UserView, EstateView, ItemView, CommentView, CreateUserView

urlpatterns = [
    path('users/', UserView.as_view()),
    path('estates/', EstateView.as_view()),
    path('item/', ItemView.as_view()),
    path('comment/', CommentView.as_view()),
    path('register-user/', CreateUserView.as_view())
]
