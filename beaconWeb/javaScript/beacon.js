function getLeftOverTime(BEACONID) {
  $( "#icon-box3" + BEACONID ).text("3:59:59");
}

function getTags(beacon, flag) {

  BEACONID = beacon.BEACONID


  var flags = beacon.flags.split(" ")

  for(var i = 0; i < flags.length; i++){
    flags[i] = flags[i].capitalize();
    $tag = $( "<p class='tag'>" + flags[i] + "</p>")
    $( "#tagTab" + BEACONID ).append($tag)
  }

  $(".tag").css({
    "min-width": "95px"
  });

}

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
