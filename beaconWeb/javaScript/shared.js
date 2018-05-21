if(gameStore == null){
  var gameStore = [];
  // Values in object
  /*
   *
   */
  var players = [];
  var events = [];
  var beacons = [];
}

var map;

function updateCounts(){

  for(var i = 0; i < gameStore.length; i++){
    gameStore[i].beaconsTotal = 0;
    gameStore[i].eventsTotal = 0;
    gameStore[i].playersTotal = 0;
  }

  /* Get the total number of players at the store */
  for(var j = 0; j < players.length; j++){
    gameStore[j].playersTotal = players[j].playersTotal;
  }

  /* Get the total number of beacons at store */
  /* NOTE: This alg could be improved */
  for(var j = 0; j < beacons.length; j++){
    var beaconGSID = beacons[j].GSID;
    for(var k = 0; k < gameStore.length; k++){
      if(beaconGSID == gameStore[k].GSID){
        gameStore[k].beaconsTotal++;
      }
    }
  }

  /* Get the total number of events at store */
  /* NOTE: This alg could be improved */
  for(var j = 0; j < events.length; j++){
    var eventGSID = events[j].GSID;
    for(var k = 0; k < gameStore.length; k++){
      if(eventGSID == gameStore[k].GSID){
        gameStore[k].eventsTotal++;
      }
    }
  }
}

function handleSetCenterButtonClicked(id) {
  console.log(id)
  var index = id[id.length-1];
  console.log(index)
  coords = {
             lat: parseFloat(gameStore[index].latitude),
             lng: parseFloat(gameStore[index].longitude)
           };
  var latLng = new google.maps.LatLng(coords.lat, coords.lng);
  console.log(coords)
  map.setCenter(latLng);
  map.setZoom(13);
}

function bubbleSortPlayers(a)
{
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < a.length-1; i++) {
            if (a[i].amount < a[i+1].amount) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

function bubbleSort(a,sort)
{
    if(sort == "Distance"){
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

    if(sort == "Players"){
      var swapped;
      do {
          swapped = false;
          for (var i=0; i < a.length-1; i++) {
              if (parseInt(a[i].playersTotal) < parseInt(a[i+1].playersTotal)) {
                  var temp = a[i];
                  a[i] = a[i+1];
                  a[i+1] = temp;
                  swapped = true;
              }
          }
      } while (swapped);
    }

    if(sort == "Beacons"){
      var swapped;
      do {
          swapped = false;
          for (var i=0; i < a.length-1; i++) {
              if (parseInt(a[i].beaconsTotal) < parseInt(a[i+1].beaconsTotal)) {
                  var temp = a[i];
                  a[i] = a[i+1];
                  a[i+1] = temp;
                  swapped = true;
              }
          }
      } while (swapped);
    }

    if(sort == "Events"){
      var swapped;
      do {
          swapped = false;
          for (var i=0; i < a.length-1; i++) {
              if (parseInt(a[i].eventsTotal) < parseInt(a[i+1].eventsTotal)) {
                  var temp = a[i];
                  a[i] = a[i+1];
                  a[i+1] = temp;
                  swapped = true;
              }
          }
      } while (swapped);
    }
}

function phoneNumberParser(number){
  return '(' + number[0] + number[1] + number[2] + ') ' + number[3] + number[4] + number[5] + '-' + number[6] + number[7] + number[8] + number[9];
}

function getParameterByName( name ){
  name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
  var regexS = "[\\?&]"+name+"=([^&#]*)";
  var regex = new RegExp( regexS );
  var results = regex.exec( window.location.href );
  if( results == null )
    return "";
  else
    return decodeURIComponent(results[1].replace(/\+/g, " "));
}
