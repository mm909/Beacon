<?php
/*
// Connect to database
include_once 'connect.php';

// get the information passed
// NOTE: 'get' does not have anything to do with "_GET['x']"
$gsName = $_GET['name'];
$latitude = $_GET['lat'];
$longitude = $_GET['lng'];
$playersAtStore = $_GET['players'];
$description = $_GET['description'];

// Create the SQL query
// examplegamestore is the table's name
// NOTE: examplegamestore is NOT the database's name
$sql = "INSERT INTO examplegamestore (gameStoreName, latitude, longitude, playersAtStore, description)
VALUES ('$gsName', '$latitude', '$longitude', '$playersAtStore', '$description');";

// Send the request and output data
echo mysqli_query($conn,$sql);
echo  "<br><br>" ;
echo $sql;
echo  "<br><br>" ;
echo "DONE";
echo  "<br><br>" ;
*/

?>

function _submitINFO(name, lat, lng, players, description){
  // Create the request
  xmlhttp = new XMLHttpRequest();

  // Form the request
  // Use the GET method
  // Call the submitINFO.php script
  // Pass into the PHP script the following values
  // into vars called "name", "lat", "lng," ...
  // Run this request sync because the js can run without
  // this scrip being finished
  xmlhttp.open("GET","databaseHandlers/submitINFO.php?"
  +"name="+name
  +"&lat="+lat
  +"&lng="+lng
  +"&players="+players
  +"&description="+description
  ,true);

  // Sent the request
  xmlhttp.send();
}
