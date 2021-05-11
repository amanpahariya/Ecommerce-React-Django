from rest_framework import routers
from .views import *
from django.conf.urls import include
from django.urls import path



router = routers.DefaultRouter()

router.register('mens_tshirt',Mens_TshirtViewSet)
router.register('mens_casualshirt',Mens_CasualShirtViewSet)
router.register('mens_formalshirt',Mens_FormatShirtViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('all/',Mens_allViewSet.as_view()),
    path('mens_tshirt/<slug:slug>/',Mens_TshirtFilterViewSet.as_view()),
    # path('check',check)
]