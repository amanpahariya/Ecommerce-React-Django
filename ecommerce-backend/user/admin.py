from django.contrib import admin
from user.models import User
from django.contrib.auth.admin import UserAdmin
from django.forms import TextInput, Textarea, CharField
from django import forms
from django.db import models



class UserAdminConfig(UserAdmin):
    model = User
    search_fields = ('email', 'last_name', 'first_name','email_status')
    list_filter = ('email', 'last_name', 'first_name', 'is_active', 'is_staff','email_status')
    ordering = ('-start_date',)
    list_display = ('email', 'last_name', 'first_name',
                    'is_active', 'is_staff','is_superuser','email_status')
    fieldsets = (
        (None, {'fields': ('email', 'last_name', 'first_name',)}),
        ('Permissions', {'fields': ('is_staff', 'is_active','is_seller','is_superuser','email_status')}),
    )
    formfield_overrides = {
        models.TextField: {'widget': Textarea(attrs={'rows': 20, 'cols': 60})},
    }
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'last_name', 'first_name', 'password1', 'password2', 'is_active', 'is_staff','is_seller','email_status')}
         ),
    )


    
admin.site.register(User, UserAdminConfig)