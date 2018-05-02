<?php
include_once 'connect.php';

$gsName = $_GET['name'];
$latitude = $_GET['lat'];
$longitude = $_GET['lng'];
$playersAtStore = $_GET['players'];
$description = $_GET['description'];

$sql = "INSERT INTO examplegamestore (gameStoreName, latitude, longitude, playersAtStore, description)
VALUES ('$gsName', '$latitude', '$longitude', '$playersAtStore', '$description');";

mysqli_query($conn,$sql);


// Able to add when fields are hard coded 'name'
?>
