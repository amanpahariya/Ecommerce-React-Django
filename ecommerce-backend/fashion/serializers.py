from rest_framework import serializers,fields
from rest_framework.serializers import FileField
from .models import *
from user.serializers import SellerSerializer


class Mens_TshirtSerializers(serializers.ModelSerializer):
    MY_CHOICE = [('S','S'),('M','M'),('L','L'),('XL','XL'),('XXL','XXL')]
    IDEAL = [('Mens','Mens')]

    SELEEVE_TYPE = [('Half Sleeve','Half Sleeve'),('Full Sleeve','Full Sleeve'),('Short Sleeve','Short Sleeve'),('3/4 Sleeve','3/4 Sleeve'),
    ('Sleeveless','Sleeveless'),('Roll-up Sleeve','Roll-up Sleeve')]

    FIT_TYPE = [('Regular','Regular'),('Slim','Slim'),('Boxy','Boxy'),('Super Slim','Super Slim'),('Tailored','Tailored')]

    class Meta:
        model = Mens_Tshirt
        fields = ('id','brand','product_name','product_price','ideal_for','neck_type','seleeve_type','color','size','seller_name','return_policy','cod','image','user','no_of_ratings','avg_ratings')

    size =fields.MultipleChoiceField(choices=MY_CHOICE)

class Mens_CasualShirtSerializers(serializers.ModelSerializer):
    MY_CHOICE = [('S','S'),('M','M'),('L','L'),('XL','XL'),('XXL','XXL')]
    class Meta:
        model = Mens_CasualShirt
        fields = ('id','brand','product_name','product_price','ideal_for','neck_type','seleeve_type','color','size','fit_type','seller_name','return_policy','cod','image','seller_name','no_of_ratings','avg_ratings')

    size =fields.MultipleChoiceField(choices=MY_CHOICE)

class Mens_FormalShirtSerializers(serializers.ModelSerializer):
    MY_CHOICE = [('S','S'),('M','M'),('L','L'),('XL','XL'),('XXL','XXL')]
    class Meta:
        model = Mens_FormalShirt
        fields = ('id','brand','product_name','product_price','ideal_for','neck_type','seleeve_type','color','size','fit_type','seller_name','return_policy','cod','image','seller_name','no_of_ratings','avg_ratings')

    size =fields.MultipleChoiceField(choices=MY_CHOICE)