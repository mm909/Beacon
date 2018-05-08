function bubbleSort(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i].distance > a[i+1].distance) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}


function mapReady(){

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


  navigator.geolocation.getCurrentPosition(function(position) {
      userLocationLat = position.coords.latitude;
      userLocationLng = position.coords.longitude;
      userPos.push(userLocationLat)
      userPos.push(userLocationLng)
      for(var i = 0; i < gameStore.length; i++){
        var test1 = gameStore[i].latitude;
        var test2 = gameStore[i].longitude;
        var loc1 = new google.maps.LatLng(userLocationLat, userLocationLng);
        var loc2 = new google.maps.LatLng(test1, test2);
        var dist = loc2.distanceFrom(loc1);
        dist = dist/1000 * 0.621371;
        dist *= 10;
        dist = Math.floor(dist);
        dist /= 10;

        gameStore[i].distance = dist;
      }
      bubbleSort(gameStore);
      console.table(gameStore)

      for(var i = 0; i < gameStore.length; i++){

        var storeName = gameStore[i].gameStoreName;
        var description = gameStore[i].description;
        var logo = gameStore[i].logo;
        var address1 = gameStore[i].street;
        var address2 = gameStore[i].city;
        address2 +=  ", " + gameStore[i].state;
        address2 += " " + gameStore[i].zip;
        var dist = gameStore[i].distance;
        var navAddress  = "https://www.google.com/maps/dir/?api=1&destination=" + address1 + address2;

        $( "#containerForSIItems" ).append(
          '<div id=store' + i + ' class="tab"></div>'
        );
        $( '#store'+i ).append(
          '<div id=SIHeader' + i + ' class="SIHeader"></div>'
        );

        $( '#SIHeader'+i ).append(
          '<div id=storeName' + i + ' class="storeName"></div>'
        );
        $( '#SIHeader'+i ).append(
          '<div id=GSSIlogoBox' + i + ' class="GSSIlogoBox"></div>'
        );
        $( '#SIHeader'+i ).append(
          '<div id=headerInformation' + i + ' class="headerInformation"></div>'
        );

        $( '#storeName'+i ).append(
          '<p class="gameStoreName">'+ storeName + '</p>'
        );
        $( '#GSSIlogoBox'+i ).append(
          '<img class="GSSIlogo" src='+ logo + '>'
        );

        $( '#headerInformation'+i ).append(
          "<a target='_blank' href='' id=address" + i + " class='address'>"+ address1 +
          "<br>"+ address2 + "</a>"
        );
        $('#address' + i).attr('href', navAddress);

        $( "#headerInformation" + i ).append(
          '<div id=distance'+ ' class="miles"><p>'+ dist + ' Miles </p></div>'
        );

      }
  })


}
