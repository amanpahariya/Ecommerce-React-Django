# Generated by Django 3.0.5 on 2021-03-24 18:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fashion', '0003_auto_20210324_1756'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mens_casualshirt',
            name='brand',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='mens_formalshirt',
            name='brand',
            field=models.CharField(blank=True, max_length=50),
        ),
        migrations.AlterField(
            model_name='mens_tshirt',
            name='brand',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
