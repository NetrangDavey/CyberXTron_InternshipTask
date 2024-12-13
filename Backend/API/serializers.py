from rest_framework import serializers
from .models import Student,Courses

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Student
        field="__all__"
    
    def create(self, validated_data):
        std=Student(**validated_data)
        std.save()
        return std

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model=Courses
        field="__all__"
    def create(self, validated_data):
        c=Courses(**validated_data)
        c.save()
        return c
