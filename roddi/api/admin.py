from django.contrib import admin
from django.contrib.auth.models import Group
from .models import User, Item, Estate, Comment

# Register your models here.

admin.site.unregister(Group)

@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = 'name', 'email'


@admin.register(Item)
class ItemAdmin(admin.ModelAdmin):
    list_display = 'name', 'estateID', 'assign'


@admin.register(Estate)
class EstateAdmin(admin.ModelAdmin):
    list_display = 'name', 'show_status'

    def show_status(self, obj):
        item_count = Item.objects.filter(estateID=obj).count()
        finished_count = Item.objects.filter(estateID=obj).filter(assign__isnull=False).count()
        return "Items done " + str(finished_count) + "/" + str(item_count)


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = 'author', 'content', 'visible', 'itemID'
