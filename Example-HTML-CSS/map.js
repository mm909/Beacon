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

}
