from django.db import models
class Courses(models.Model):
    sno=models.IntegerField(primary_key=True)
    cname=models.CharField(max_length=20,blank=True,null=True)
    des=models.CharField(max_length=50,blank=True,null=True)
    duration=models.IntegerField(blank=True,null=True)

    class Meta:
        managed = False
        db_table = 'Courses'

class Student(models.Model):
    id=models.IntegerField(primary_key=True)
    course=models.ForeignKey('Courses',models.DO_NOTHING)
    sname=models.CharField(max_length=20,blank=True,null=True)
    email=models.CharField(max_length=255,blank=True,null=True)
    phone=models.CharField(max_length=10,blank=True,null=True)

    class Meta:
        managed = False
        db_table = 'Student'