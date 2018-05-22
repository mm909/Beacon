function getLeftOverTime(BEACONID) {
  $( "#icon-box3" + BEACONID ).text("3:59:59");
}

function getTags(BEACONID) {
  /* Create tag */
  $tag = $( "<p class='tag'> Modern </p>")
  $( "#tagTab" + BEACONID ).append($tag)

  /* Create tag */
  $tag = $( "<p class='tag'> Free </p>")
  $( "#tagTab" + BEACONID ).append($tag)

  /* Create tag */
  $tag = $( "<p class='tag'> Fun </p>")
  $( "#tagTab" + BEACONID ).append($tag)

  /* Create tag */
  $tag = $( "<p class='tag'> Beginner </p>")
  $( "#tagTab" + BEACONID ).append($tag)
}
