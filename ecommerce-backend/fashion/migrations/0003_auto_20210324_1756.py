# Generated by Django 3.0.5 on 2021-03-24 17:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('fashion', '0002_auto_20210324_1756'),
    ]

    operations = [
        migrations.RenameField(
            model_name='mens_formalshirt',
            old_name='fit',
            new_name='fit_type',
        ),
    ]