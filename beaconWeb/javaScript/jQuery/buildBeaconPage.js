$( document ).ready(function() {
  for(var i = 0; i < gameStore.length; i++){
    GSID = gameStore[i].GSID
    console.log(GSID)

    /* Create the card */
    $siBeaconCard = $( "<div class='siItem' id='exampleGameBeaconCard" + GSID + "' ></div>" )
    $( "#test" ).append($siBeaconCard);
    //--
        $gameStoreName = $( "<p>" + gameStore[i].gameStoreName + "</p>")
        $( "#exampleGameBeaconCard" + GSID ).append($gameStoreName)

    var beaconCount = 0;
    for(var j = 0; j < beacons.length; j++){
      var BEACONID = beacons[j].BEACONID;

      if(beacons[j].GSID != GSID) continue;
      beaconCount++;

      /* Create beaconBox */
      $beaconBox = $( "<div id='beaconBox" + BEACONID + "' class='beaconBox'>")
      $( "#exampleGameBeaconCard" + GSID ).append($beaconBox)
      //--

      /* Create box-container */
      $boxcontainer = $( "<div id='box-container" + BEACONID + "' class='box-container'>")
      $( "#beaconBox" + BEACONID ).append($boxcontainer)
      //--

          /* Create icon-box */
          $iconbox = $( "<div id='icon-box1" + BEACONID + "' class='icon-box'>")
          $( "#box-container" + BEACONID ).append($iconbox)
          //--

              /* Create playername */
              $playername = $( "<p class='playername'>" + beacons[j].player1Name + "</p>")
              $( "#icon-box1" + BEACONID ).append($playername)

          /* Create icon-box */
          $iconbox = $( "<div id='icon-box2" + BEACONID + "' class='icon-box'>")
          $( "#box-container" + BEACONID ).append($iconbox)
          //--

              /* Create beaconPlayerCount */
              $beaconPlayerCount = $( "<p class='beaconPlayerCount'>" + beacons[j].currentPlayers + ":" + beacons[j].players + "</p>")
              $( "#icon-box2" + BEACONID ).append($beaconPlayerCount)

          /* Create icon-box */
          $iconbox = $( "<div id='icon-box3" + BEACONID + "' class='icon-box'>")
          $( "#box-container" + BEACONID ).append($iconbox)
          //--

              /* Create time */
              $time = $( "<p class='time'></p>")
              $( "#icon-box3" + BEACONID ).append($time)

      /* Create beaconSummaryBox */
      $beaconSummaryBox = $( "<div id='beaconSummaryBox" + BEACONID + "' class='beaconSummaryBox'>")
      $( "#beaconBox" + BEACONID ).append($beaconSummaryBox)
      //--

          /* Create game */
          $game = $( "<p class='game'>" + beacons[j].game + "</p>")
          $( "#beaconSummaryBox" + BEACONID ).append($game)

          /* Create tagTab */
          $tagTab = $( "<div id='tagTab" + BEACONID + "' class='tagTab'>")
          $( "#beaconSummaryBox" + BEACONID ).append($tagTab)
          //--
              getTags(beacons[j]);

      /* Create description */
      $description = $( "<p class='description'>" + beacons[j].description + "</p>")
      $( "#beaconBox" + BEACONID ).append($description)

      /* Create respond button */
      $respond = $( "<button class='respond'>Respond</button>")
      $( "#beaconBox" + BEACONID ).append($respond)

    }

    if(beaconCount == 0){
      /* Create beaconBox */
      $beaconBox = $( "<p> There are no Beacons at this location. </p>")
      $( "#exampleGameBeaconCard" + GSID ).append($beaconBox)
    }

  }
});
