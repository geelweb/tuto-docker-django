(function($) {
    $.fn.googleMap = function() {

        return this.each(function() {

            var c = $(this).data('latlng').split(','),
                self = this,
                markersLi = $('ul.markers li', this),
                latlng = new google.maps.LatLng(c[0], c[1]);
            var mapOptions = {
                zoom: 11,
                center: latlng,
                mapTypeControl: false,
                navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };
            var map = new google.maps.Map(this, mapOptions);

            var contentStrings = [],
                infoWindows = [],
                markers = [];
            markersLi.each(function(index) {
                contentStrings[index] = '<div id="content">' +
                    '<div id="siteNotice">' + $(this).data('notice') + '</div>' +
                    '<h4 id="firstHeading" class="firstHeading">' + $(this).data('heading') + '</h4>' +
                    '<div id="bodyContent">' + $(this).data('body') + '</div>' +
                    '</div>';
                infoWindows[index] = new google.maps.InfoWindow({
                    content: contentStrings[index],
                });

                var c2 = $(this).data('latlng').split(',');
                markers[index] = new google.maps.Marker({
                    position: new google.maps.LatLng(c2[0], c2[1]),
                    map: map,
                    title: $(this).data('heading'),
                    icon: $(this).data('icon'),
                });
                google.maps.event.addListener(markers[index], 'click', function() {
                    infoWindows[index].open(map, markers[index]);
                });
            });
        });
    };

    $(document).ready(function() {
        $('div.gmap').googleMap();
    });
}(jQuery));
