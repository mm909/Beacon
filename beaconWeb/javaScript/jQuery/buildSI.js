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

  /* Create the card */
  $siStoreCard = $( "<div class='siItem' id='exampleGameStoreCard1'></div>" )
  $( ".tableStores" ).append($siStoreCard);
  //--

      /* Create the header part */
      $siStoreHeader = $( "<div id='exampleGameStoreHeader1' class='si-Store-Header'></div>" )
      $( "#exampleGameStoreCard1" ).append($siStoreHeader)
      //--

          /* Create Store Name */
          $siStoreName = $( "<a id='exampleGameStoreName1' class='storeName' href='#'>Darkside Games</a>")
          $( "#exampleGameStoreHeader1" ).append($siStoreName)

          /* Create Break */
          $siStoreBreak = $( "<hr>")
          $( "#exampleGameStoreHeader1" ).append($siStoreBreak)

          /* Create Directions Link */
          $siStoreDirections = $( "<a class='directions' href='#'>Directions</a>")
          $( "#exampleGameStoreHeader1" ).append($siStoreDirections)

          /* Create Distance */
          $siStoreDistance = $( "<p class='distance'>X miles</p>")
          $( "#exampleGameStoreHeader1" ).append($siStoreDistance)

      /* Create Header Break */
      $siStoreHaederBreak = $( "<hr class='headerBreak'>")
      $( "#exampleGameStoreCard1" ).append($siStoreHaederBreak)

      /* Create the buttons part */
      $siStoreButtons = $( "<div id='exampleGameStoreButtons1' class='siButtons'>" )
      $( "#exampleGameStoreCard1" ).append($siStoreButtons)
      //--

          /* Create the buttons container */
          $siStoreButtonContainer = $( "<div id='exampleGameStoreButtonContainer1' class='btn-group btn-group-justified'>" )
          $( "#exampleGameStoreButtons1" ).append($siStoreButtonContainer)
          //--

              /* Create Button*/
              $siStoreButton1 = $( "<a href='#' onclick='' class='btn btn-dark'>Players: x</a>" )
              $( "#exampleGameStoreButtonContainer1" ).append($siStoreButton1)

              /* Create Button*/
              $siStoreButton2 = $( "<a href='#' onclick='' class='btn btn-dark'>Beacons: x</a>" )
              $( "#exampleGameStoreButtonContainer1" ).append($siStoreButton2)

              /* Create Button*/
              $siStoreButton3 = $( "<a href='#' onclick='' class='btn btn-dark'>Events: x</a>" )
              $( "#exampleGameStoreButtonContainer1" ).append($siStoreButton3)

      /* Create Button Break */
      $siStoreButtonBreak = $( "<hr class='buttonBreak'>")
      $( "#exampleGameStoreCard1" ).append($siStoreButtonBreak)

      /* Create Phone Number */
      $siStorePhone = $( "<p class='phone'>702-540-4190</p>")
      $( "#exampleGameStoreCard1" ).append($siStorePhone)
}
