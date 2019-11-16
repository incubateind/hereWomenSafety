from django.shortcuts import render,get_object_or_404
from .models import location
# Create your views here.

def home(request):
	if request.POST:
		idi = request.POST.get('id')
		n1 = request.POST.get('latitude')
		n2 = request.POST.get('longitude')

		form_obj = location(idi,n1,n2)
		form_obj.save()
		
		args = {'lat':n1,'lon':n2}
		return render(request,'home.html',args)

def index(request):
	return render(request,'index.html')

def viewhome(request):
	loc = location.objects.all()
	args = {'loc':loc}
	return render(request,'view.html',args)

