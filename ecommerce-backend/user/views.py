from django.shortcuts import render
from rest_framework.views import APIView
from .serializers import CustomUserSerializer
from rest_framework.response  import Response
from rest_framework import status,views,generics
from rest_framework.permissions import AllowAny,IsAuthenticated
from django.http import JsonResponse
from rest_framework_simplejwt.tokens import RefreshToken
from user.models import User
from .utils import Util
from django.contrib.sites.shortcuts import get_current_site
from django.urls import reverse
import jwt
from django.conf import settings
from decouple import config
class CustomUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        serializer = CustomUserSerializer(data=request.data)
        
        if serializer.is_valid():
            try:
                user = serializer.save()         
                if user:
                    json = serializer.data
                    
                    user_data = User.objects.get(email=json['email'])
                    token = RefreshToken.for_user(user_data).access_token

                    current_site = config('CORS_ORIGIN_WHITELIST')+'/register/verify'

                    absurl = current_site+'?token='+str(token)
                
                    email_body = 'Hi'+json['first_name']+' Use link below to verify your email \n'+absurl
                    data={'email_body':email_body,'subject':'Verify your email','to_email':json['email']}

                    # Util.send_email(data)

                    return Response(json, status=status.HTTP_201_CREATED)
            except:
                    data={
                        'exist':'already exist'
                }
                    return Response(data,status=status.HTTP_200_OK)
       
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ViewProtect(views.APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request, format=None):
     
        user_details = {
                "name" : request.user.first_name
        }
        return JsonResponse(user_details)


class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class VerifyEmail(generics.GenericAPIView):
    permission_classes = [AllowAny]

    def get(self,request):
        token=request.GET.get('token')
        try:
            payload = jwt.decode(token,settings.SECRET_KEY,verify=True,algorithms='HS256')
            user=User.objects.get(id=payload['user_id'])
            
            if not user.email_status:
                user.email_status = True
                user.save()

            return Response({'email':'Successfully activated'}, status=status.HTTP_200_OK)
        except jwt.ExpiredSignatureError as identifier:
                return Response({'error':'Activation Expired'}, status=status.HTTP_400_BAD_REQUEST)

        except jwt.exceptions.DecodeError as identifier:
                return Response({'error':'Invalid Token'}, status=status.HTTP_400_BAD_REQUEST)

