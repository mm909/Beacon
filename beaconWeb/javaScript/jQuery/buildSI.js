function buildSI(){

  /* Google function to calc distance between two points */
  google.maps.LatLng.prototype.distanceFrom = function(latlng) {
    var lat = [this.lat(), latlng.lat()]
    var lng = [this.lng(), latlng.lng()]
    var R = 6378137;
    var dLat = (lat[1]-lat[0]) * Math.PI / 180;
    var dLng = (lng[1]-lng[0]) * Math.PI / 180;
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat[0] * Math.PI / 180 ) * Math.cos(lat[1] * Math.PI / 180 ) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c;
    return Math.round(d);
  }

  /* Function to add distance to the gameStore object */
  navigator.geolocation.getCurrentPosition(function(position) {
      // Get user's posistion
      userPos = { lat: position.coords.latitude, lng: position.coords.longitude }
      // Run through each store and get the distance from the user to the store.
      for(var i = 0; i < gameStore.length; i++){
        // Get store's position
        storePos = { lat: gameStore[i].latitude, lng: gameStore[i].longitude}
        // Convert it to google format
        var user = new google.maps.LatLng(userPos.lat, userPos.lng);
        var store = new google.maps.LatLng(storePos.lat, storePos.lng);
        gameStore[i].distance = getDistance(user, store);

      }

      updateCounts();

      /* Create the sorter */
      $siStoreSorter = $( "<select id='storeSorter' class='sorter'>" )
      $( ".tableStores" ).append($siStoreSorter);
      $( "#storeSorter" ).change(function() {
        rearangeSI($( "#storeSorter" ).val());
      });
      //--

          /* Create options */
          $siStoreSorterOption = $( "<option selected value='Distance'>Distance</option>" )
          $( "#storeSorter" ).append($siStoreSorterOption);

          /* Create options */
          $siStoreSorterOption = $( "<option value='Players'>Players</option>" )
          $( "#storeSorter" ).append($siStoreSorterOption);

          /* Create options */
          $siStoreSorterOption = $( "<option value='Beacons'>Beacons</option>" )
          $( "#storeSorter" ).append($siStoreSorterOption);

          /* Create options */
          $siStoreSorterOption = $( "<option value='Events'>Events</option>" )
          $( "#storeSorter" ).append($siStoreSorterOption);

      bubbleSort(gameStore, $( "#storeSorter" ).val())
      popluateSICards();

  });
}

function rearangeSI(sortVal) {

  $( ".tableStores" ).empty();

  /* Create the sorter */
  $siStoreSorter = $( "<select id='storeSorter' class='sorter'>" )
  $( ".tableStores" ).append($siStoreSorter);
  $( "#storeSorter" ).change(function() {
    rearangeSI($( "#storeSorter" ).val());
  });
  //--

      /* Create options */
      if(sortVal == "Distance"){
        $siStoreSorterOption = $( "<option selected value='Distance'>Distance</option>" )
        $( "#storeSorter" ).append($siStoreSorterOption);
      } else
      {
        $siStoreSorterOption = $( "<option value='Distance'>Distance</option>" )
        $( "#storeSorter" ).append($siStoreSorterOption);
      }

      /* Create options */
      if(sortVal == "Players"){
        $siStoreSorterOption = $( "<option selected value='Players'>Players</option>" )
        $( "#storeSorter" ).append($siStoreSorterOption);
      } else
      {
        $siStoreSorterOption = $( "<option value='Players'>Players</option>" )
        $( "#storeSorter" ).append($siStoreSorterOption);
      }

      /* Create options */
      if(sortVal == "Beacons"){
        $siStoreSorterOption = $( "<option selected value='Beacons'>Beacons</option>" )
        $( "#storeSorter" ).append($siStoreSorterOption);
      } else
      {
        $siStoreSorterOption = $( "<option value='Beacons'>Beacons</option>" )
        $( "#storeSorter" ).append($siStoreSorterOption);
      }

      /* Create options */
      if(sortVal == "Events"){
        $siStoreSorterOption = $( "<option selected value='Events'>Events</option>" )
        $( "#storeSorter" ).append($siStoreSorterOption);
      } else
      {
        $siStoreSorterOption = $( "<option value='Events'>Events</option>" )
        $( "#storeSorter" ).append($siStoreSorterOption);
      }

      bubbleSort(gameStore, sortVal)
      popluateSICards();

}

function popluateSICards(){
  /*
  <div class="siItem">
    <div class="si-Store-Header">
      <a class="storeName" href="#">Darkside Games</a>
      <hr>
      <a class="directions" href="#">Directions</a>
      <p class="distance">X miles</p>
    </div>
    <hr class="headerBreak">
    <div class="siButtons">
      <div class="btn-group btn-group-justified">
        <a href="#" onclick="" class="btn btn-dark">Players: x</a>
        <a href="#" onclick="" class="btn btn-dark">Beacons: x</a>
        <a href="#" onclick="" class="btn btn-dark">Events: x</a>
      </div>
    </div>
    <hr class="buttonBreak">
    <p class="phone">702-540-4190</p>
  </div>
  */

  for(var i = 0; i < gameStore.length; i++){

    /* Get address for nav link */
    var address1    = gameStore[i].street;
    var address2    = gameStore[i].city;
        address2   +=  ", " + gameStore[i].state;
        address2   += " " + gameStore[i].zip;
    var navAddress  = "https://www.google.com/maps/dir/?api=1&destination=" + address1 + address2;

    /* Create the card */
    $siStoreCard = $( "<div class='siItem' id='exampleGameStoreCard" + i + "' ></div>" )
    $( ".tableStores" ).append($siStoreCard);
    //--

        /* Create the header part */
        $siStoreHeader = $( "<div id='exampleGameStoreHeader" + i + "' class='si-Store-Header'></div>" )
        $( "#exampleGameStoreCard" + i ).append($siStoreHeader)
        //--

            /* Create Store Name */
            $siStoreName = $( "<a id='exampleGameStoreName" + i + "' class='storeName' href='#'>" + gameStore[i].gameStoreName + "</a>")
            $( "#exampleGameStoreHeader" + i ).append($siStoreName)
            $( "#exampleGameStoreName" + i ).click(function() {
              console.log( "Handler for .click() called." );
              handleSetCenterButtonClicked(this.id);
            });

            /* Create Break */
            $siStoreBreak = $( "<hr>")
            $( "#exampleGameStoreHeader" + i ).append($siStoreBreak)

            /* Create Directions Link */
            $siStoreDirections = $( "<a class='directions' target='_blank' href='" + navAddress + "'>Directions</a>")
            $( "#exampleGameStoreHeader" + i ).append($siStoreDirections)

            /* Create Distance */
            $siStoreDistance = $( "<p class='distance'>" + gameStore[i].distance + " miles</p>")
            $( "#exampleGameStoreHeader" + i ).append($siStoreDistance)

        /* Create Header Break */
        $siStoreHaederBreak = $( "<hr class='headerBreak'>")
        $( "#exampleGameStoreCard" + i ).append($siStoreHaederBreak)

        /* Create the buttons part */
        $siStoreButtons = $( "<div id='exampleGameStoreButtons" + i + "' class='siButtons'>" )
        $( "#exampleGameStoreCard" + i ).append($siStoreButtons)
        //--

            /* Create the buttons container */
            $siStoreButtonContainer = $( "<div id='exampleGameStoreButtonContainer" + i + "' class='btn-group btn-group-justified'>" )
            $( "#exampleGameStoreButtons" + i ).append($siStoreButtonContainer)
            //--

                /* Create Button*/
                $siStoreButton1 = $( "<a href='pages/stores/storePage.html?GSID=" + gameStore[i].GSID + "&DIST=" + gameStore[i].distance + "' onclick='' class='btn btn-dark'>Players: " + gameStore[i].playersTotal + "</a>" )
                $( "#exampleGameStoreButtonContainer" + i ).append($siStoreButton1)

                /* Create Button*/
                $siStoreButton2 = $( "<a href='pages/stores/storePage.html?GSID=" + gameStore[i].GSID + "&DIST=" + gameStore[i].distance + "' onclick='' class='btn btn-dark'>Beacons: " + gameStore[i].beaconsTotal + "</a>" )
                $( "#exampleGameStoreButtonContainer" + i ).append($siStoreButton2)

                /* Create Button*/
                $siStoreButton3 = $( "<a href='pages/stores/storePage.html?GSID=" + gameStore[i].GSID + "&DIST=" + gameStore[i].distance + "' onclick='' class='btn btn-dark'>Events: " + gameStore[i].eventsTotal + "</a>" )
                $( "#exampleGameStoreButtonContainer" + i ).append($siStoreButton3)

        /* Create Button Break */
        $siStoreButtonBreak = $( "<hr class='buttonBreak'>")
        $( "#exampleGameStoreCard" + i ).append($siStoreButtonBreak)

        /* Create Phone Number */
        $siStorePhone = $( "<p class='phone'>" + phoneNumberParser(gameStore[i].phone) + "</p>")
        $( "#exampleGameStoreCard" + i ).append($siStorePhone)
  }
}
