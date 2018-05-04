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
<?php include('connect.php')?>

<html>

<head>
  <title> Map </title>
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="styles.css">
  <script language="javascript" type="text/javascript" src="map.js"></script>
  <script language="javascript" type="text/javascript" src="databaseAccess.js"></script>
  <script language="javascript" type="text/javascript" src="SI.js"></script>

  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlx94CvcdTa_9PQ2Qgeig2aHPpL2lMsU0&callback=initMap"></script>
</head>

<body>
  <!-- Div is a container for other html elements -->
<div id="Container-Map-SI">

  <div id="Container-Map">
    <div id="map" class="Map"></div>
  </div>

  <div id="Container-SI">
    <div id="Scrollable-Box">
      <div class="content">
        <div class="gameStore-SI">
        <img src="testImage.jpg" alt="Hope this works" class="storeImage">
        <h2>Vendredi 17 octobre</h2>
        <h2>Vendredi 17 octobre</h2>
        <h2>Vendredi 17 octobre</h2>
        </div>
        <div class="gameStore-SI">
          <h2>Vendredi 18 octobre</h2>
          <h2>Vendredi 18 octobre</h2>
          <h2>Vendredi 18 octobre</h2>
        </div>
        <div class="gameStore-SI">
          <h2>Vendredi 19 octobre</h2>
          <h2>Vendredi 19 octobre</h2>
          <h2>Vendredi 19 octobre</h2>
        </div>
      </div>
    </div>
  </div>
</div>

</body>

</html>
