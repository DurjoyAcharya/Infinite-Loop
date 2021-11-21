# Create your views here.
from os import name

from django.http import HttpResponse
from django.http.response import HttpResponse
from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request,'index.html',{'Name':'Durjoy Acharya'})

def answer(request):
    try:
        var1=int(request.POST['Number1'])
        var2=int(request.POST['Number2'])
        ans=var1+var2
        return render(request,"result.html",{"res":ans})
    except ValueError:
        return render(request,"result.html",{"res":'Empty Feild'})    
