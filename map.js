
  function initMap(){

    // Map options
    var options = {
      zoom:8,
      center:{lat:36.8055,lng:-114.0672}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    google.maps.event.trigger(map, 'resize')
    
    // Listen for click on map
    google.maps.event.addListener(map, 'click', function(event){
      // Add marker
      var tempLat = event.latLng.lat().toFixed(4);
      var tempLng = event.latLng.lng().toFixed(4);
      _submitINFO("Testing Name", tempLat, tempLng, 0, "This store was added by the User.");
      addMarker({coords:event.latLng});
    });

    var _markers = _receiveINFO();
    var tempMarkers = [];
    //console.log("SUCESS: ", _markers);
    for(var i = 0; i < _markers.length; i++){
      tempMarkers[i] = {
        coords:{
          lat:parseFloat(_markers[i].latitude),
          lng:parseFloat(_markers[i].longitude)
        }
      }
    }

    // Loop through markers
    for(var i = 0; i < tempMarkers.length; i++){
      // Add marker
      addMarker(tempMarkers[i]);
      //console.log(tempMarkers[i]);
    }

    // Add Marker Function
    function addMarker(props){

      var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        //icon:props.iconImage
      });

      // Check for customicon
      if(props.iconImage){
        // Set icon image
        marker.setIcon(props.iconImage);
      }

      // Check content
      //if(props.content){
        /*
        var infoWindow = new google.maps.InfoWindow({
          content:props.content
        });
        */

        marker.addListener('click', function(){
          // infoWindow.open(map, marker);
          console.log("You clicked on: ", this);
          let lat = this.position.lat().toFixed(4);
          let lng = this.position.lng().toFixed(4);
          _deleteINFO(lat,lng);
          _receiveINFO();
        });
      //}
    }
  }
