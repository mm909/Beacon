// This is the JS related to the google api map
// https://developers.google.com/maps/documentation/javascript/examples/
// ^ Very helpful resource

// initMap is the callback function for the map api
// this function is called once the map call in our "index.php" file is finished

function initMap(){

  // How does the map start?
  // Where? How much zoom?
  var options = {
    zoom:11,
    center:{lat:36.8055,lng:-114.0672}
  }

  // Make a new map with those options and place it in <div id="map"></div>
  var map = new google.maps.Map(document.getElementById('map'), options);
  var infoWindow = new google.maps.InfoWindow;

  if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           var pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };
           map.setCenter(pos);


           tempMarker = {
             coords:{
               lat: position.coords.latitude,
               lng: position.coords.longitude,
             }
           }

           var icon = {
               scaledSize: new google.maps.Size(50, 50), // scaled size
           };

           var marker = new google.maps.Marker({
             position:tempMarker.coords,
             map:map,
           });


         }, function() {
           handleLocationError(true, infoWindow, map.getCenter());
         });
       } else {
         // Browser doesn't support Geolocation
         handleLocationError(false, infoWindow, map.getCenter());
       }

       function handleLocationError(browserHasGeolocation, infoWindow, pos) {
         infoWindow.setPosition(pos);
         infoWindow.setContent(browserHasGeolocation ?
                               'Error: The Geolocation service failed.' :
                               'Error: Your browser doesn\'t support geolocation.');
         infoWindow.open(map);
       }





  // Add a function to the marker
  function addMarker(object){
    var marker = new google.maps.Marker({
      position:object.coords,
      map:map
    });
  }

}
