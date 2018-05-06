<!-- YOU MUST HAVE A SERVER CONNECTION TO RUN PHP SCRIPTS -->

<!-- This is the index.php file.
     This file wraps all of the needed code
     and pushes it to the browser
     -->

<!-- Using HTML 5 -->
<!DOCTYPE html>

<!-- Call the connect.php script
     This will get information from a database
     to place markers on the map
     -->
<?php include('databaseHandlers/connect.php')?>

<html>

<!-- Meta information, styles, js, and API links -->
<head>
  <title> Map </title>
  <meta charset="utf-8">
  <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
  <link rel="stylesheet" type="text/css" href="styles.css">
  <script language="javascript" type="text/javascript" src="javaScript/map.js"></script>
  <script language="javascript" type="text/javascript" src="databaseHandlers/databaseAccess.js"></script>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlx94CvcdTa_9PQ2Qgeig2aHPpL2lMsU0&callback=initMap"></script>
</head>


<!-- Div is a container for other html elements -->

<body>



<!-- This div contains two elements - a map and a summary information section -->
<div id="Container-Map-SI">

  <!-- This section holds the map -->
  <div id="Container-Map">
    <!-- This is the div element that the initMap function references -->
    <div id="map" class="Map"></div>
  </div>

  <!-- This section holds all of the text at the bottom on the screen (not the map) -->
  <div id="Container-SI">
    <!-- This container holds a big list of other divs and makes them able to scroll -->
    <div id="Scrollable-Box" class="content">
      <!-- Content section of the scrollable box - basically a place holder -->
      <div id="contentSection" class="content">

        <!-- This is the container for each indivisual 'game store' displayed in the contnet section -->
        <div class="gameStore-SI">

          <!-- Image container -->
          <div class="storeImageContainer">
            <img src="images/storeLogos/Darkside.jpg" class=storeImage>
          </div>

          <!-- Text container -->
          <div class="TextContainer">
            <div class="storeNameContainer">
              <h3> Darkside Games </h3>
            </div>
            <div class="storeAddressContainer">
              <p> 9620 South Las Vegas Boulevard</p>
            </div>
            <div class="PlayerInfrormation1">
              <div class="players">
                <p> Total Players: 5</p>
              </div>
            </div>
            <div class="PlayerInfrormation2">
              <div class="popular">
                <p> Popular: Magic</p>
              </div>
            </div>
          </div>

        </div>

        <div class="gameStore-SI">

          <div class="storeImageContainer">
            <img src="images/storeLogos/Darkside.jpg" class=storeImage>
          </div>

          <div class="TextContainer">
            <div class="storeNameContainer">
              <h3> Darkside Games </h3>
            </div>
            <div class="storeAddressContainer">
              <p> 9620 South Las Vegas Boulevard</p>
            </div>
            <div class="PlayerInfrormation1">
              <div class="players">
                <p> Total Players: 5</p>
              </div>
            </div>
            <div class="PlayerInfrormation2">
              <div class="popular">
                <p> Popular: Magic</p>
              </div>
            </div>
          </div>

        </div>

        <div class="gameStore-SI">

          <div class="storeImageContainer">
            <img src="images/storeLogos/Darkside.jpg" class=storeImage>
          </div>

          <div class="TextContainer">
            <div class="storeNameContainer">
              <h3> Darkside Games </h3>
            </div>
            <div class="storeAddressContainer">
              <p> 9620 South Las Vegas Boulevard</p>
            </div>
            <div class="PlayerInfrormation1">
              <div class="players">
                <p> Total Players: 5</p>
              </div>
            </div>
            <div class="PlayerInfrormation2">
              <div class="popular">
                <p> Popular: Magic</p>
              </div>
            </div>
          </div>

        </div>

        <div class="gameStore-SI">

          <div class="storeImageContainer">
            <img src="images/storeLogos/Darkside.jpg" class=storeImage>
          </div>

          <div class="TextContainer">
            <div class="storeNameContainer">
              <h3> Darkside Games </h3>
            </div>
            <div class="storeAddressContainer">
              <p> 9620 South Las Vegas Boulevard</p>
            </div>
            <div class="PlayerInfrormation1">
              <div class="players">
                <p> Total Players: 5</p>
              </div>
            </div>
            <div class="PlayerInfrormation2">
              <div class="popular">
                <p> Popular: Magic</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</div>

</body>

</html>
