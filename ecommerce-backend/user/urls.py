from django.urls import path
from .views import *

app_name = 'users'

urlpatterns = [
    path('create/', CustomUserCreate.as_view(), name="create_user"),
    path('email-verify/', VerifyEmail.as_view(), name="email-verify"),
    path('userdetails',ViewProtect.as_view()),
    # path('logout/blacklist/', BlacklistTokenUpdateView.as_view(),
    #      name='blacklist')
]