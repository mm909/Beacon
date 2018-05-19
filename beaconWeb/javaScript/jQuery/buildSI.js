function buildSI(){

  /*
  <div class="siItem">
    <div class="si-Store-Header">
      <a class="storeName" href="#">Darkside Games</a>
      <hr>
      <a class="directions" href="#">Directions</a>
      <p class="distance">X miles</p>
    </div>
    <hr class="headerBreak">
    <div class="siButtons">
      <div class="btn-group btn-group-justified">
        <a href="#" onclick="" class="btn btn-dark">Players: x</a>
        <a href="#" onclick="" class="btn btn-dark">Beacons: x</a>
        <a href="#" onclick="" class="btn btn-dark">Events: x</a>
      </div>
    </div>
    <hr class="buttonBreak">
    <p class="phone">702-540-4190</p>
  </div>
  */

  for(var i = 0; i < gameStore.length; i++){
    /* Create the card */
    $siStoreCard = $( "<div class='siItem' id='exampleGameStoreCard" + i + "' ></div>" )
    $( ".tableStores" ).append($siStoreCard);
    //--

        /* Create the header part */
        $siStoreHeader = $( "<div id='exampleGameStoreHeader" + i + "' class='si-Store-Header'></div>" )
        $( "#exampleGameStoreCard" + i ).append($siStoreHeader)
        //--

            /* Create Store Name */
            $siStoreName = $( "<a id='exampleGameStoreName" + i + "' class='storeName' href='#'>Darkside Games</a>")
            $( "#exampleGameStoreHeader" + i ).append($siStoreName)

            /* Create Break */
            $siStoreBreak = $( "<hr>")
            $( "#exampleGameStoreHeader" + i ).append($siStoreBreak)

            /* Create Directions Link */
            $siStoreDirections = $( "<a class='directions' href='#'>Directions</a>")
            $( "#exampleGameStoreHeader" + i ).append($siStoreDirections)

            /* Create Distance */
            $siStoreDistance = $( "<p class='distance'>X miles</p>")
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
                $siStoreButton1 = $( "<a href='#' onclick='' class='btn btn-dark'>Players: x</a>" )
                $( "#exampleGameStoreButtonContainer" + i ).append($siStoreButton1)

                /* Create Button*/
                $siStoreButton2 = $( "<a href='#' onclick='' class='btn btn-dark'>Beacons: x</a>" )
                $( "#exampleGameStoreButtonContainer" + i ).append($siStoreButton2)

                /* Create Button*/
                $siStoreButton3 = $( "<a href='#' onclick='' class='btn btn-dark'>Events: x</a>" )
                $( "#exampleGameStoreButtonContainer" + i ).append($siStoreButton3)

        /* Create Button Break */
        $siStoreButtonBreak = $( "<hr class='buttonBreak'>")
        $( "#exampleGameStoreCard" + i ).append($siStoreButtonBreak)

        /* Create Phone Number */
        $siStorePhone = $( "<p class='phone'>702-540-4190</p>")
        $( "#exampleGameStoreCard" + i ).append($siStorePhone)
  }
}
