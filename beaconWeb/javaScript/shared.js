var gameStore = [];
// Values in object
/*
 *
 */
var players = [];
var events = [];
var beacons = [];

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

function getDistance(user, store){
  // Use the google api to get the distance is meters
  var dist = user.distanceFrom(store);
  // Convert that to miles and round to the tenth
  dist = dist/1000 * 0.621371;
  dist *= 10;
  dist = Math.floor(dist);
  dist /= 10;
  return dist;
}

function phoneNumberParser(number){
  return '(' + number[0] + number[1] + number[2] + ') ' + number[3] + number[4] + number[5] + '-' + number[6] + number[7] + number[8] + number[9];
}
