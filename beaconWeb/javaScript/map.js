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
  }
}
