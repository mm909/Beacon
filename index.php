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
</head>

<body>
  <!-- Div is a container for other html elements -->
  <div id="Main-Section" class="Container-Map-SI">

    <div id="Map-Section" class="Container-Map">

    </div>
    <div id="SI-Section" class="Container-SI">

    </div>

  </div>




</body>

</html>
