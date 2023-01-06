from django.db import models
from django.db.models.lookups import IsNull


# Create your models here.

class User(models.Model):
    email = models.CharField(max_length=45, unique=True)
    name = models.CharField(max_length=28)
    isAdmin = models.BooleanField(null=False, default=False)
    password = models.CharField(max_length=28, null=True)

    def __str__(self):
        return self.email
    

class Item(models.Model):
    name = models.CharField(max_length=40)
    estateID = models.ForeignKey("api.Estate", verbose_name=(""), on_delete=models.DO_NOTHING) 
    assign = models.ForeignKey(User, on_delete=models.CASCADE, default=None, null=True, blank=True)
    description = models.CharField(max_length=70, null=True, blank=True)

    def __str__(self):
        return self.name
    

class Comment(models.Model):
    content =  models.CharField(max_length=40)
    visible = models.BooleanField(default= False)
    upVotes = models.IntegerField(default= 0)
    downVotes = models.IntegerField(default= 0 )
    author = models.CharField(max_length=40)
    itemID = models.ForeignKey("api.Item", verbose_name=(""), on_delete=models.DO_NOTHING, default=None) 

class Estate(models.Model):
    name = models.CharField(max_length=40)
    members = models.ManyToManyField(User)
    alert = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    



    




