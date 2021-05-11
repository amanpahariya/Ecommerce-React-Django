from django.db import models
from multiselectfield import MultiSelectField
import uuid
from django.core.validators import MaxValueValidator, MinValueValidator
from user.models import User
import jsonfield

class Mens_Tshirt(models.Model):
    MY_CHOICE = [('S','S'),('M','M'),('L','L'),('XL','XL'),('XXL','XXL')]
    IDEAL = [('Mens','Mens')]

    SELEEVE_TYPE = [('Full Sleeve','Full Sleeve'),('Half Sleeve','Half Sleeve'),('Sleeveless','Sleeveless'),('Short Sleeve','Short Sleeve'),
    ('Layered Sleeve','Layered Sleeve'),('Roll-up Sleeve','Roll-up Sleeve'),('3/4 Sleeve','3/4 Sleeve'),('Raglan','Raglan')]

    id = models.UUIDField(primary_key=True,auto_created=True,editable=False,default=uuid.uuid4)

    brand = models.CharField(max_length=50,blank=True)

    product_name = models.CharField(max_length=100)

    product_price = models.IntegerField()

    ideal_for = MultiSelectField(choices=IDEAL)

    neck_type = models.CharField(max_length=100)

    seleeve_type = models.CharField(max_length=100,choices=SELEEVE_TYPE)

    color = models.CharField(max_length=100)
    
    size = MultiSelectField(choices=MY_CHOICE)

    return_policy = models.IntegerField()

    cod = models.BooleanField()

    image = jsonfield.JSONField()

    seller_name = models.ForeignKey(User,related_name='seller',on_delete=models.CASCADE)



    def no_of_ratings(self):
        ratings = Mens_TshirtRatings.objects.filter(product=self)
        # print()
        return len(ratings)

    def avg_ratings(self):
        sum = 0
        ratings = Mens_TshirtRatings.objects.filter(product=self)
        for rating in ratings:
            sum +=rating.stars
        if len(ratings) > 0:
            return sum/len(ratings)
        else:
            return 0

    def user(self):
        user = User.objects.filter(email=self.seller_name).values()[0]
        data = {
            'email':user['email'],
            'firstname':user['first_name']
        }
        return data

class Mens_TshirtRatings(models.Model):
    id = models.UUIDField(primary_key=True,auto_created=True,editable=False,default=uuid.uuid4)
    product = models.ForeignKey(Mens_Tshirt,on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    stars = models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])

    class Meta:
        unique_together = (('user','product'))
        index_together = (('user','product'))

class Mens_CasualShirt(models.Model):
    MY_CHOICE = [('S','S'),('M','M'),('L','L'),('XL','XL'),('XXL','XXL')]
    IDEAL = [('Mens','Mens')]

    SELEEVE_TYPE = [('Half Sleeve','Half Sleeve'),('Full Sleeve','Full Sleeve'),('Short Sleeve','Short Sleeve'),('3/4 Sleeve','3/4 Sleeve'),
    ('Sleeveless','Sleeveless'),('Roll-up Sleeve','Roll-up Sleeve')]

    FIT_TYPE = [('Regular','Regular'),('Slim','Slim'),('Boxy','Boxy'),('Super Slim','Super Slim'),('Tailored','Tailored')]

    id = models.UUIDField(primary_key=True,auto_created=True,editable=False,default=uuid.uuid4)

    brand = models.CharField(max_length=50,blank=True)

    product_name = models.CharField(max_length=100)

    product_price = models.IntegerField()

    ideal_for =  MultiSelectField()

    neck_type = models.CharField(max_length=100)

    seleeve_type = models.CharField(max_length=100,choices=SELEEVE_TYPE)

    color = models.CharField(max_length=100)
    
    size =  jsonfield.JSONField()

    fit = models.CharField(max_length=100,choices=FIT_TYPE)

    return_policy = models.IntegerField()

    cod = models.BooleanField()

    image =  jsonfield.JSONField()

    seller_name = models.ForeignKey(User,on_delete=models.CASCADE)


    def no_of_ratings(self):
        ratings = Mens_CasualShirtRatings.objects.filter(product=self)
        return len(ratings)

    def avg_ratings(self):
        sum = 0
        ratings = Mens_CasualShirtRatings.objects.filter(product=self)
        for rating in ratings:
            sum +=rating.stars
        if len(ratings) > 0:
            return sum/len(ratings)
        else:
            return 0
        
    def user(self):
        user = User.objects.filter(email=self.seller_name).values()[0]
        data = {
            'email':user['email'],
            'firstname':user['first_name']
        }
        return data

class Mens_CasualShirtRatings(models.Model):
    id = models.UUIDField(primary_key=True,auto_created=True,editable=False,default=uuid.uuid4)
    product = models.ForeignKey(Mens_CasualShirt,on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    stars = models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])

    class Meta:
        unique_together = (('user','product'))
        index_together = (('user','product'))

class Mens_FormalShirt(models.Model):
    MY_CHOICE = [('S','S'),('M','M'),('L','L'),('XL','XL'),('XXL','XXL')]
    IDEAL = [('Mens','Mens')]

    SELEEVE_TYPE = [('Half Sleeve','Half Sleeve'),('Full Sleeve','Full Sleeve'),('Short Sleeve','Short Sleeve'),('3/4 Sleeve','3/4 Sleeve'),
    ('Sleeveless','Sleeveless'),('Roll-up Sleeve','Roll-up Sleeve')]

    FIT_TYPE = [('Regular','Regular'),('Slim','Slim'),('Boxy','Boxy'),('Super Slim','Super Slim'),('Tailored','Tailored')]

    id = models.UUIDField(primary_key=True,auto_created=True,editable=False,default=uuid.uuid4)

    brand = models.CharField(max_length=50,blank=True)

    product_name = models.CharField(max_length=100)

    product_price = models.IntegerField()

    ideal_for =  jsonfield.JSONField()

    neck_type = models.CharField(max_length=100)

    seleeve_type = models.CharField(max_length=100,choices=SELEEVE_TYPE)

    color = models.CharField(max_length=100)
    
    fit_type = models.CharField(max_length=50,choices=FIT_TYPE)

    size =  jsonfield.JSONField()

    return_policy = models.IntegerField()

    cod = models.BooleanField()

    image =  jsonfield.JSONField()

    seller_name = models.ForeignKey(User,on_delete=models.CASCADE)




    def no_of_ratings(self):
        ratings = Mens_FormalShirtRatings.objects.filter(product=self)
        return len(ratings)

    def avg_ratings(self):
        sum = 0
        ratings = Mens_FormalShirtRatings.objects.filter(product=self)
        for rating in ratings:
            sum +=rating.stars
        if len(ratings) > 0:
            return sum/len(ratings)
        else:
            return 0

    def user(self):
        user = User.objects.filter(email=self.seller_name).values()[0]
        data = {
            'email':user['email'],
            'firstname':user['first_name']
        }
        return data
class Mens_FormalShirtRatings(models.Model):
    id = models.UUIDField(primary_key=True,auto_created=True,editable=False,default=uuid.uuid4)
    product = models.ForeignKey(Mens_FormalShirt,on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    stars = models.IntegerField(validators=[MinValueValidator(1),MaxValueValidator(5)])

    class Meta:
        unique_together = (('user','product'))
        index_together = (('user','product'))
