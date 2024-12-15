from django.shortcuts import render
from .serializers import StudentSerializer,CourseSerializer
from .models import Student,Courses
from rest_framework import generics
# Create your views here.


class StudentView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class CourseView(generics.ListCreateAPIView):
    queryset=Courses.objects.all()
    serializer_class=CourseSerializer

class StudentDeleteView(generics.DestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer