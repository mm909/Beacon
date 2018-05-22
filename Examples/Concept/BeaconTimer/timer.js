/*
date = [[2018, 05, 22, 14, 6, 00], [2018, 05, 22, 12, 34, 04], [2018, 05, 22, 13, 53, 04], [2018, 05, 22, 12, 03, 05],
        [2018, 05, 22, 11, 03, 09], [2018, 05, 22, 15, 32, 26], [2018, 05, 22, 13, 08, 20], [2018, 05, 22, 12, 10, 00]]
*/

var date = [];

window.setInterval(function(){
  initTimes();
}, 1000);

$(document).ready(function(){
  parseTimes();
  initTimes();
});

// YYYY-MM-DD HH:MM:SS
// {YYYY, MM, DD, HH, MM, SS}
function parseTimes() {
    for(var i = 0; i < beacons.length; i++){
      str = beacons[i].dateTimeCreated;
      date[i] = [ parseInt(str.substring(0,4)), parseInt(str.substring(5,7)),
                  parseInt(str.substring(8,10)), parseInt(str.substring(11,13)),
                  parseInt(str.substring(14,16)), parseInt(str.substring(17,19))]
    }
}

// {YYYY, MM, DD, HH, MM, SS}
function dateToMilli(beaconDate){
  var temp = new Date(beaconDate[0], beaconDate[1] - 1, beaconDate[2], beaconDate[3], beaconDate[4], beaconDate[5]);
  var time = milliToHours(Date.now() - temp)
  return time;
}

function initTimes(){
  // Replace with beacons.length
  for(var i = 0; i < date.length; i++){
      var timeDifference = dateToMilli(date[i]);
      timeDifference[0] = 3 - timeDifference[0];
      timeDifference[1] = 59 - timeDifference[1];
      timeDifference[2] = 59 - timeDifference[2];
      if(timeDifference[0] < 0) {
         timeDifference[0] = 0;
         timeDifference[1] = 0;
         timeDifference[2] = 0;
      }

      $("#time" + i).html(timeDifference[0] + ":" + timeDifference[1] + ":" + timeDifference[2])
  }
}

function milliToHours(milli){
  var hours   = Math.floor(milli / 3600000);
  var min     = Math.floor((milli - (hours * 3600000)) / 60000);
  var seconds = Math.floor((milli - (hours * 3600000) - (min * 60000)) / 1000);
  return [hours,min,seconds]
}
