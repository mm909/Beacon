
<!DOCTYPE html>
<?php include('databaseHandlers/connect.php')?>

<html>
  <head>
    <div class="height"></div>
    <title> Map </title>
    <meta charset="utf-8">
    <script>document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')</script>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlx94CvcdTa_9PQ2Qgeig2aHPpL2lMsU0&callback=initMap"></script>
    <script language="javascript" type="text/javascript" src="javaScript/map.js"></script>
    <script language="javascript" type="text/javascript" src="javaScript/jQuery/nav.js"></script>
    <script language="javascript" type="text/javascript" src="databaseHandlers/databaseAccess.js"></script>
    <script language="javascript" type="text/javascript" src="javaScript/jQuery/si.js"></script>
  </head>

  <header class="header">


    <div class="container">
      <div class="logoContainer">
        <img src="../images/logos/beaconLogo.png" class="logo">
      </div>
      <a href="index.php">Beacon!</a>
      <div class="settingsContainer">
        <img src="../images/menuUI/menu.png" id="threeLines">
      </div>
    </div>
  </header>

  <div class="nav">
    <div class="container">
      <ul>
        <li><a href="#">Map</a></li>
        <li><a href="#">Matchmaking</a></li>
        <li><a href="#">Stores</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
  </div>

  <body>

    <div class="container-map">
      <div id="map" class="Map"></div>
    </div>

    <div id="container-tab">
      <div id="container-tab1" class="content">
        <div id="containerForSIItems" class="content">


        </div>
      </div>
    </div>

  </body>

</html>
