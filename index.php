<!DOCTYPE html>
<!-- <?php include('dataBaseAccess.php')?> -->
<?php include('connect.php')?>

<html>

<style>
  #map{
    height:400px;
    width:100%;
  }
</style>

<head>
  <title>Example Data</title>
  <meta charset="utf-8">
  <script language="javascript" type="text/javascript" src="map.js"></script>
  <script language="javascript" type="text/javascript" src="submitINFO.js"></script>
  <script language="javascript" type="text/javascript" src="receiveINFO.js"></script>
  <script language="javascript" type="text/javascript" src="deleteINFO.js"></script>
  <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBlx94CvcdTa_9PQ2Qgeig2aHPpL2lMsU0&callback=initMap"></script>
</head>

<body>
  <div style="height: 500px; width: 500px;" id="map"></div>
</body>
</html>
