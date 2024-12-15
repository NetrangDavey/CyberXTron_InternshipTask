from django.urls import path,include
from .views import StudentView,CourseView,StudentDeleteView

urlpatterns = [
    path('students/',StudentView.as_view()),
    path('courses/',CourseView.as_view()),
    path('students/<int:pk>/',StudentDeleteView.as_view()),
]
