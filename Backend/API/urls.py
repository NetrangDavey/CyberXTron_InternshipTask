from django.urls import path,include
from .views import StudentView,CourseView

urlpatterns = [
    path('students/',StudentView.as_view()),
    path('courses/',CourseView.as_view()),
]
