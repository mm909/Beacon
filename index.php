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
  <!-- Note that we do not include PHP files -->
  <meta charset="utf-8">
  <link rel="stylesheet" type="text/css" href="styles.css">
  <script language="javascript" type="text/javascript" src="map.js"></script>
  <script language="javascript" type="text/javascript" src="databaseAccess.js"></script>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlx94CvcdTa_9PQ2Qgeig2aHPpL2lMsU0&callback=initMap"></script>
</head>

<!-- Where the map lives -->
<body>
  <!-- Div is a container for other html elements -->
  <div id="map"></div>

  <div id="summaryInformation">
    <script language="javascript" type="text/javascript" src="resizeMap.js"></script>
  </div>

</body>

</html>
