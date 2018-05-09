// This function creates the SI using jquery
// Last updated - Mikian - 5/7/18


function genSI(){

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

  // Call the google API to get the current location and the pass in
  // This NOTE: CALLBACK function
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

      // Sort the stores based on the distance from the player
      bubbleSort(gameStore);
      // console.table(gameStore)

      // Create the SI table
      for(var i = 0; i < gameStore.length; i++){

        // Get local vars
        var storeName   = gameStore[i].gameStoreName;
        var description = gameStore[i].description;
        var phone       = gameStore[i].phone;
        var logo        = gameStore[i].logo;
        var address1    = gameStore[i].street;
        var address2    = gameStore[i].city;
            address2   +=  ", " + gameStore[i].state;
            address2   += " " + gameStore[i].zip;
        var dist        = gameStore[i].distance;
        var navAddress  = "https://www.google.com/maps/dir/?api=1&destination=" + address1 + address2;

        // Create container
        $( "#containerForSIItems" ).append(
          '<div id=store' + i + ' class="tab"></div>'
        );
        // Create header container
        $( '#store'+i ).append(
          '<div id=SIHeader' + i + ' class="SIHeader"></div>'
        );
        // Create a line
        $( '#store'+i ).append(
          '<div id=SIBreak' + i + ' class="SIBreak"><hr></div>'
        );
        $( '#store'+i ).append(
          '<div id=PlayerInformation' + i + ' class="PlayerInformation"></div>'
        );

        // Create store name container
        $( '#SIHeader'+i ).append(
          '<div id=storeName' + i + ' class="storeName"></div>'
        );
        // Create logo container
        $( '#SIHeader'+i ).append(
          '<div id=GSSIlogoBox' + i + ' class="GSSIlogoBox"></div>'
        );
        // Create header information container
        $( '#SIHeader'+i ).append(
          '<div id=headerInformation' + i + ' class="headerInformation"></div>'
        );

        // Add store name content
        $( '#storeName'+i ).append(
          '<p class="gameStoreName">'+ storeName + '</p>'
        );
        // Add store logo content
        $( '#GSSIlogoBox'+i ).append(
          '<img class="GSSIlogo" src='+ logo + '>'
        );
        // Add address content
        $( '#headerInformation'+i ).append(
          "<a target='_blank' href='' id=address" + i + " class='address'>"+ address1 +
          "<br>"+ address2 + "</a>"
        );
        $( "#headerInformation" + i ).append(
          '<div id=distance'+ ' class="miles"><p>'+ dist + ' Miles </p></div>'
        );
        // Attach nav link to address
        $('#address' + i).attr('href', navAddress);

        $( "#headerInformation" + i ).append(
          '<div id=DPspacer'+ i +' class="DPspacer"><br></div>'
        );
        $( "#headerInformation" + i ).append(
          '<div id=phone'+ i +' class="phoneNumber"><p>'+ phoneNumberParser(phone) + ' </p></div>'
        );

        $( '#PlayerInformation'+i ).append(
          '<div id=grid-container2' + i + ' class="gridcontainer2"></div>'
        );

        $( '#grid-container2'+ i  ).append(
          '<div id=grid-container' + i + ' class="gridcontainer"></div>'
        );

        $( '#grid-container2'+ i ).append(
          '<div class="grid-item2">Total Players: ' + players[i].playersTotal + '</div>'
        );


/*
        $( '#PlayerInformation'+i ).append(
          '<div id=totalPlayers' + i + ' class="totalPlayers"><p> Total Players: ' + players[i].playersTotal + '</p></div>'
        );
        $( '#PlayerInformation'+i ).append(
          '<div id=events' + i + ' class="events"><p> Total Events: ' + players[i].playersTotal + '</p></div>'
        );
*/
        var sortedArray = [];

        sortedArray.push({name:'Magic',amount:players[i].playersMagic})
        sortedArray.push({name:'Pokemon',amount:players[i].playersPokemon})
        sortedArray.push({name:'Yugioh',amount:players[i].playersYugioh})
        sortedArray.push({name:'DND',amount:players[i].playersDND})
        sortedArray.push({name:'Warhammer',amount:players[i].playersWarhammer})
        bubbleSortPlayers(sortedArray);
        console.table(sortedArray)




        if(players[i].playersTotal > 0){
          for(var j = 0; j < sortedArray.length; j++){
            if(sortedArray[j].amount > 0){
              $( '#grid-container'+ i ).append(
                '<div class="grid-item">' + sortedArray[j].name + ' Players: ' + sortedArray[j].amount + '</div>'
              );
            }
          }
          if(players[i].playersOther > 0){
            $( '#grid-container'+ i ).append(
              '<div class="grid-item"><strong>Other Players: ' + players[i].playersOther + '</div>'
            );
          }
        } else {
          $( '#PlayerInformation'+ i ).append(
            '<p class="grid-item message"> No one is here. Don\'t forget to check in! </p>'
          );
        }

          $( '.PlayerInformation').hover(
            function() {
              $(this).find( '.totalPlayers' ).css('background-color', 'rgba(102,252,241,0.75)');
              $(this).find( '.gridcontainer' ).show();
              $(this).find( '.message' ).show();

            }, function(){
              $(this).find( '.totalPlayers' ).css('background-color', 'transparent');
              $(this).find( '.gridcontainer' ).hide();
              $(this).find( '.message' ).hide();

            }
          );



          /*<div class="grid-item">1</div>*/

      } // Close for loop
      $( '.gridcontainer' ).hide()
      $( '.message' ).hide()
  }) // Close callback





} // Close genSI
