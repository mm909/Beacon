// This is the JS related to the google api map
// https://developers.google.com/maps/documentation/javascript/examples/
// ^ Very helpful resource

// initMap is the callback function for the map api
// this function is called once the map call in our "index.php" file is finished
function initMap(){

  // How does the map start?
  // Where? How much zoom?
  var options = {
    zoom:8,
    center:{lat:36.8055,lng:-114.0672}
  }

  // Make a new map with those options and place it in <div id="map"></div>
  map = new google.maps.Map(document.getElementById('map'), options);

  // Add listner - For when someone clicks on the map
  google.maps.event.addListener(map, 'click', function(event){

    // get lat and lng where the user clicked
    var tempLat = event.latLng.lat().toFixed(4);
    var tempLng = event.latLng.lng().toFixed(4);

    // Add that information to the database
    _submitINFO("Testing Name", tempLat, tempLng, 0, "This store was added by the User.");

    // Add the marker to the Map
    addMarker({coords:event.latLng});
  });

  // Get the list of markers (game stores) from our database
  var _markers = _receiveINFO();

  // Parse information from that huge json object
  // We are preping the data to make marker objects
  var tempMarker = null;
  for(var i = 0; i < _markers.length; i++){

      // Create the marker object
    tempMarker = {
      coords:{
        lat:parseFloat(_markers[i].latitude),
        lng:parseFloat(_markers[i].longitude)
      }
    }

    // Add this marker to the map
    addMarker(tempMarker);
  }

  // Add a function to the marker
  function addMarker(object){
    var marker = new google.maps.Marker({
      position:object.coords,
      map:map,
    });

    // Delete this marker if it is clicked on
    marker.addListener('click', function(){
      let lat = this.position.lat().toFixed(4);
      let lng = this.position.lng().toFixed(4);
      _deleteINFO(lat,lng);
      _receiveINFO();
    });
  }
}
