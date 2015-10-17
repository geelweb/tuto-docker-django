from django.contrib.gis import geos
from django.shortcuts import render_to_response
from django.template import RequestContext
from geopy import geocoders
from map.forms import SearchForm

def geocode_address(address):
    if address is None or address == '':
        return None
    address = address.encode("utf-8")
    geocoder = geocoders.GoogleV3(domain='maps.google.fr')
    try:
        place, latlon = geocoder.geocode(address)
    except (URLError, ValueError):
        pass
    else:
        return latlon

# Create your views here.
def index(request):
    form = SearchForm(request.GET or None)
    address = 'New York'
    if form.is_valid():
        address = form.cleaned_data['address']

    location = geocode_address(address)
    if location:
        lat, lon = location
        current_point = geos.fromstr("POINT(%s %s)" % (lon, lat))

    return render_to_response('map/index.html', {
        'form': form,
        'location': current_point
        }, context_instance=RequestContext(request))
