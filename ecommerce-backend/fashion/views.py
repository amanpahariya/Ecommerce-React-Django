from django.shortcuts import render,HttpResponse

from rest_framework import viewsets,status,views,generics
from rest_framework.response import Response
from .serializers import *
from .models import *
from drf_multiple_model.views import FlatMultipleModelAPIView
from drf_multiple_model.pagination import MultipleModelLimitOffsetPagination
from rest_framework.decorators import action
from decouple import config
from rest_framework.permissions import AllowAny,IsAuthenticated


class LimitPagination(MultipleModelLimitOffsetPagination):
    default_limit = 2

class Mens_allViewSet(FlatMultipleModelAPIView):
    pagination_class = LimitPagination
    permission_classes = [AllowAny]
    querylist = [
        {'queryset':Mens_Tshirt.objects.all(),'serializer_class' :Mens_TshirtSerializers},
        {'queryset':Mens_CasualShirt.objects.all(),'serializer_class': Mens_CasualShirtSerializers},
        {'queryset':Mens_FormalShirt.objects.all(),'serializer_class':  Mens_FormalShirtSerializers},
    ]
    serializer_class = Mens_FormalShirtSerializers(querylist,many=True)


class Mens_TshirtViewSet(viewsets.ModelViewSet):
    pagination_class = LimitPagination
    permission_classes = [AllowAny]

    queryset = Mens_Tshirt.objects.all()
    serializer_class = Mens_TshirtSerializers

    # @action(detail=True,methods=['POST'])
    # def rate_product(self,request,pk=None):
    #     if 'stars' in request.data:
    #         product = Mens_Tshirt.objects.get(id=pk)
    #         stars = request.data['stars']

            # try:
            #     rating = Mens_TshirtRatings.ob


class Mens_TshirtFilterViewSet(generics.ListAPIView):
    serializer_class = Mens_TshirtSerializers
    permission_classes = [AllowAny]

    def get_queryset(self):
        id = self.kwargs('slug')
        return Mens_Tshirt.objects.filter(id=id)

class Mens_CasualShirtViewSet(viewsets.ModelViewSet):
    pagination_class = LimitPagination
    permission_classes = [AllowAny]

    queryset = Mens_CasualShirt.objects.all()
    serializer_class = Mens_CasualShirtSerializers

class Mens_FormatShirtViewSet(viewsets.ModelViewSet):
    pagination_class = LimitPagination
    permission_classes = [AllowAny]

    queryset = Mens_FormalShirt.objects.all()
    serializer_class = Mens_FormalShirtSerializers


