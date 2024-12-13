from django.shortcuts import render
from .serializers import StudentSerializer,CourseSerializer
from .models import Student,Courses
from rest_framework import generics
# Create your views here.


class StudentView(generics.ListAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer