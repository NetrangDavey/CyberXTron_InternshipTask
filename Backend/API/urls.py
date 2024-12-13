from django.urls import path,include
from .views import StudentView

urlpatterns = [
    path('students/',StudentView.as_view()),
]
