var gameStore = [];
var players = [];

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
