<?php

/*
var gameStoreOject = {
  gameStoreName:
  latitude:
  longitude:
  description:
  street:
  state:
  city:
  zip:
  phone:
  logo:
  email:
}

var gameStoreOject = {
  gameStoreName: "TestGameStore",
  latitude: 36,
  longitude: -115,
  description: "This is a Test",
  street: "Test Street",
  state: "State of Testing",
  city: "Testvill",
  zip: "777",
  phone: "777777777",
  logo: "/GitHub/Beacon/images/logos/DEFAULT.jpg",
  email: "test@testing.com"
}

*/

// Connect to database
include_once 'CONNECT.php';

// get the information passed
// NOTE: 'get' does not have anything to do with "_GET['x']"
$gameStoreName = $_GET['gameStoreName'];
$latitude = $_GET['latitude'];
$longitude = $_GET['longitude'];
$description = $_GET['description'];
$street = $_GET['street'];
$state = $_GET['state'];
$city = $_GET['city'];
$zip = $_GET['zip'];
$phone = $_GET['phone'];
$logo = $_GET['logo'];
$email = $_GET['email'];

// Create the SQL query
$sql = "INSERT INTO `gamestoreinfo` (`gameStoreName`, `latitude`, `longitude`, `description`, `street`, `state`, `city`, `zip`, `phone`, `email`, `logo`)
VALUES ('$gameStoreName', '$latitude', '$longitude', '$description', '$street', '$state', '$city', '$zip', '$phone', '$email', '$logo');";

// Send the request and output data
echo mysqli_query($conn,$sql);
echo  "<br><br>" ;
echo $sql;

$sql = "INSERT INTO `currentplayerinfo`(`gameStoreName`, `playersTotal`, `playersMagic`, `playersPokemon`, `playersYugioh`, `playersDND`, `playersWarhammer`, `playersOther`)
VALUES ('$gameStoreName',0,0,0,0,0,0,0);";

// Send the request and output data
echo mysqli_query($conn,$sql);
echo  "<br><br>" ;
echo $sql;

echo  "<br><br>" ;
echo "DONE";
echo  "<br><br>" ;
?>
