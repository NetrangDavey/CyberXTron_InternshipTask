# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models



class Courses(models.Model):
    sno = models.IntegerField(primary_key=True)
    cname = models.CharField(max_length=20, blank=True, null=True)
    des = models.CharField(max_length=50, blank=True, null=True)
    duration = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Courses'


class Student(models.Model):
    id = models.IntegerField(primary_key=True)
    course = models.ForeignKey('Courses', models.DO_NOTHING, db_column='course', blank=True, null=True)
    sname = models.CharField(max_length=20, blank=True, null=True)
    email = models.CharField(max_length=255, blank=True, null=True)
    phone = models.CharField(max_length=10, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'Student'