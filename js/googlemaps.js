var mapOptions = {
    center: new google.maps.LatLng(59.337238,18.0676545),
    zoom: 12,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

var markerOptions = {
    position: new google.maps.LatLng(59.337238,18.0676545),
    map: map
};
var marker = new google.maps.Marker(markerOptions);
marker.setMap(map);

var infoWindowOptions = {
    content: 'Off the Grid, David Bagares gata 19 Stockholm'
};

var infoWindow = new google.maps.InfoWindow(infoWindowOptions);
google.maps.event.addListener(marker,'click',function(e){

  infoWindow.open(map, marker);

});
