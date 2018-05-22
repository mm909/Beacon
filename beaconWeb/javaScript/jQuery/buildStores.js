$( document ).ready(function() {

  var GSID = getParameterByName("GSID")
  var DIST = getParameterByName("DIST")
  var FLAG = getParameterByName("FLAG")

  console.log(GSID)
  console.log(DIST)
  console.log(FLAG)

  updateCounts();

  if(FLAG == 1){
    for(var i = 0; i < gameStore.length; i++){

      /* Get address for nav link */
      var address1    = gameStore[i].street;
      var address2    = gameStore[i].city;
          address2   +=  ", " + gameStore[i].state;
          address2   += " " + gameStore[i].zip;
      var navAddress  = "https://www.google.com/maps/dir/?api=1&destination=" + address1 + address2;

      /* Create the card */
      $siStoreCard = $( "<div class='siItem' id='exampleGameStoreCard" + i + "' ></div>" )
      $( ".pageContent" ).append($siStoreCard);
      //--

          /* Create the header part */
          $siStoreHeader = $( "<div id='exampleGameStoreHeader" + i + "' class='si-Store-Header'></div>" )
          $( "#exampleGameStoreCard" + i ).append($siStoreHeader)
          //--

              /* Create Store Name */
              $siStoreName = $( "<a id='exampleGameStoreName" + i + "' class='storeName' href='#'>" + gameStore[i].gameStoreName + "</a>")
              $( "#exampleGameStoreHeader" + i ).append($siStoreName)

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
                  $siStoreButton1 = $( "<a href='stores/storePage.html?GSID=" + gameStore[i].GSID + "&DIST=" + gameStore[i].distance + "' onclick='' class='btn btn-dark'>Players: " + gameStore[i].playersTotal + "</a>" )
                  $( "#exampleGameStoreButtonContainer" + i ).append($siStoreButton1)

                  /* Create Button*/
                  $siStoreButton2 = $( "<a href='stores/storePage.html?GSID=" + gameStore[i].GSID + "&DIST=" + gameStore[i].distance + "' onclick='' class='btn btn-dark'>Beacons: " + gameStore[i].beaconsTotal + "</a>" )
                  $( "#exampleGameStoreButtonContainer" + i ).append($siStoreButton2)

                  /* Create Button*/
                  $siStoreButton3 = $( "<a href='stores/storePage.html?GSID=" + gameStore[i].GSID + "&DIST=" + gameStore[i].distance + "' onclick='' class='btn btn-dark'>Events: " + gameStore[i].eventsTotal + "</a>" )
                  $( "#exampleGameStoreButtonContainer" + i ).append($siStoreButton3)

          /* Create Button Break */
          $siStoreButtonBreak = $( "<hr class='buttonBreak'>")
          $( "#exampleGameStoreCard" + i ).append($siStoreButtonBreak)

          /* Create Phone Number */
          $siStorePhone = $( "<p class='phone'>" + phoneNumberParser(gameStore[i].phone) + "</p>")
          $( "#exampleGameStoreCard" + i ).append($siStorePhone)
    }
  } else {

    for(var i = 0; i < gameStore.length; i++){
      if(gameStore[i].GSID == parseInt(GSID)){
        var index = i;
        break;
      }
    }

    console.log(gameStore[index])

    /* Get address for nav link */
    var address1    = gameStore[index].street;
    var address2    = gameStore[index].city;
        address2   +=  ", " + gameStore[index].state;
        address2   += " " + gameStore[index].zip;
    var navAddress  = "https://www.google.com/maps/dir/?api=1&destination=" + address1 + address2;

    $( ".navbar-title" ).text(gameStore[index].gameStoreName);

    $testBanner = $( "<a href='../stores.html?FLAG=1' onclick='' class='bannerButton'>-- Go to Stores --</a>" )
    $( ".pageContent" ).append($testBanner);

    /* Create the card */
    $siStoreCard = $( "<div class='siItem' id='exampleGameStoreCard" + GSID + "' ></div>" )
    $( ".pageContent" ).append($siStoreCard);
    //--

        /* Create the header part */
        $siStoreHeader = $( "<div id='exampleGameStoreHeader" + GSID + "' class='si-Store-Header'></div>" )
        $( "#exampleGameStoreCard" + GSID ).append($siStoreHeader)
        //--

            /* Create Store Name */
            $siStoreName = $( "<a id='exampleGameStoreName" + GSID + "' class='storeName' href='#'>" + gameStore[index].gameStoreName + "</a>")
            $( "#exampleGameStoreHeader" + GSID ).append($siStoreName)

            /* Create Break */
            $siStoreBreak = $( "<hr>")
            $( "#exampleGameStoreHeader" + GSID ).append($siStoreBreak)

            /* Create Directions Link */
            $siStoreDirections = $( "<a class='directions' target='_blank' href='" + navAddress + "'>Directions</a>")
            $( "#exampleGameStoreHeader" + GSID ).append($siStoreDirections)

            /* Create Distance */
            $siStoreDistance = $( "<p class='distance'>" + DIST + " miles</p>")
            $( "#exampleGameStoreHeader" + GSID ).append($siStoreDistance)

        /* Create Header Break */
        $siStoreHaederBreak = $( "<hr class='headerBreak'>")
        $( "#exampleGameStoreCard" + GSID ).append($siStoreHaederBreak)

        /* Create the buttons part */
        $siStoreButtons = $( "<div id='exampleGameStoreButtons" + GSID + "' class='siButtons'>" )
        $( "#exampleGameStoreCard" + GSID ).append($siStoreButtons)
        //--

            /* Create the buttons container */
            $siStoreButtonContainer = $( "<div id='exampleGameStoreButtonContainer" + GSID + "' class='btn-group btn-group-justified'>" )
            $( "#exampleGameStoreButtons" + GSID ).append($siStoreButtonContainer)
            //--

                /* Create Button*/
                $siStoreButton1 = $( "<a href='#' onclick='' class='btn btn-dark'>Players: " + gameStore[index].playersTotal + "</a>" )
                $( "#exampleGameStoreButtonContainer" + GSID ).append($siStoreButton1)

                /* Create Button*/
                $siStoreButton2 = $( "<a href='#' onclick='' class='btn btn-dark'>Beacons: " + gameStore[index].beaconsTotal + "</a>" )
                $( "#exampleGameStoreButtonContainer" + GSID ).append($siStoreButton2)

                /* Create Button*/
                $siStoreButton3 = $( "<a href='#' onclick='' class='btn btn-dark'>Events: " + gameStore[index].eventsTotal + "</a>" )
                $( "#exampleGameStoreButtonContainer" + GSID ).append($siStoreButton3)

        /* Create Button Break */
        $siStoreButtonBreak = $( "<hr class='buttonBreak'>")
        $( "#exampleGameStoreCard" + GSID ).append($siStoreButtonBreak)

        /* Create Phone Number */
        $siStorePhone = $( "<p class='phone'>" + phoneNumberParser(gameStore[index].phone) + "</p>")
        $( "#exampleGameStoreCard" + GSID ).append($siStorePhone)

        /*
        <hr class="storeSIBreak">
        <div class="BeaconSection">
          <h4> Beacons </h4>
            <hr class="storeSIBreak">
            <div class="beaconStorePageSI">
              <div class="box-container">
                <div class="icon-box">
                  <p class="playername">Mikian</p>
                </div>
                <div class="icon-box">
                  <p class="beaconPlayerCount">1:2</p>
                </div>
                <div class="icon-box">
                  <p class="time">3:59:59</p>
                </div>
              </div>
              <p class="respondingPlayers">Mikian has responded</p>
              <div class="beaconSummaryBox">
                <p class="game">Magic!</p>
                <div class="tagTab">
                  <p class="tag"> Modern </p>
                  <p class="tag"> Free </p>
                  <p class="tag"> Fun </p>
                  <p class="tag"> Beginner </p>
                </div>
              </div>
              <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>
            </div>
          */

          /* Create phone Break */
          $storeSIBreak = $( "<hr class='storeSIBreak'>")
          $( "#exampleGameStoreCard" + GSID ).append($storeSIBreak)

          /* Create beacon section */
          $BeaconSection = $( "<div id='BeaconSection" + GSID + "' class='BeaconSection'>")
          $( "#exampleGameStoreCard" + GSID ).append($BeaconSection)
          //--

              /* Create beacon header */
              $Beacons = $( "<h4> Beacons </h4>")
              $( "#BeaconSection" + GSID ).append($Beacons)

              /* Create storeSIBreak */
              $storeSIBreak = $( "<hr class='storeSIBreak'>")
              $( "#BeaconSection" + GSID ).append($storeSIBreak)

              /* Create beaconStorePageSI */
              $beaconStorePageSI = $( "<div id='beaconStorePageSI" + GSID + "' class='beaconStorePageSI'>")
              $( "#BeaconSection" + GSID ).append($beaconStorePageSI)
              //--

              for(var i = 0; i < beacons.length; i++){
                var BEACONID = beacons[i].BEACONID;

                /* Create beaconBox */
                $beaconBox = $( "<div id='beaconBox" + BEACONID + "' class='beaconBox'>")
                $( "#beaconStorePageSI" + GSID ).append($beaconBox)
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
                        $playername = $( "<p class='playername'>" + beacons[i].player1Name + "</p>")
                        $( "#icon-box1" + BEACONID ).append($playername)

                    /* Create icon-box */
                    $iconbox = $( "<div id='icon-box2" + BEACONID + "' class='icon-box'>")
                    $( "#box-container" + BEACONID ).append($iconbox)
                    //--

                        /* Create beaconPlayerCount */
                        $beaconPlayerCount = $( "<p class='beaconPlayerCount'>" + beacons[i].currentPlayers + ":" + beacons[i].players + "</p>")
                        $( "#icon-box2" + BEACONID ).append($beaconPlayerCount)

                    /* Create icon-box */
                    $iconbox = $( "<div id='icon-box3" + BEACONID + "' class='icon-box'>")
                    $( "#box-container" + BEACONID ).append($iconbox)
                    //--

                        /* Create time */
                        $time = $( "<p class='time'></p>")
                        $( "#icon-box3" + BEACONID ).append($time)
                        getLeftOverTime(BEACONID);

                /* Create beaconSummaryBox */
                $beaconSummaryBox = $( "<div id='beaconSummaryBox" + BEACONID + "' class='beaconSummaryBox'>")
                $( "#beaconBox" + BEACONID ).append($beaconSummaryBox)
                //--

                    /* Create game */
                    $game = $( "<p class='game'>" + beacons[i].game + "</p>")
                    $( "#beaconSummaryBox" + BEACONID ).append($game)

                    /* Create tagTab */
                    $tagTab = $( "<div id='tagTab" + BEACONID + "' class='tagTab'>")
                    $( "#beaconSummaryBox" + BEACONID ).append($tagTab)
                    //--

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

                /* Create description */
                $description = $( "<p class='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua </p>")
                $( "#beaconBox" + BEACONID ).append($description)

              }
  }
});
