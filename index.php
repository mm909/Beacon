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
  <div id="Main-Section" class="Container-Map-SI">

    <div id="Map-Section" class="Container-Map">
      <div id="map" class="Map"></div>
    </div>

    <div id="SI-Section" class="Container-SI">
          <option value="1" SELECTED>1</option>
          <option value="2" >2</option>
          <option value="3" >3</option>
          <option value="4" >4</option>
          <option value="5" >5</option>
          <option value="6" >6</option>
          <option value="7" >7</option>
          <option value="8" >8</option>
          <option value="9" >9</option>
          <option value="10" >10</option>
          <option value="11" >11</option>
          <option value="12" >12</option>
          <option value="13" >13</option>
         </select>
      </div>
    </div>

  </div>










</body>

</html>
