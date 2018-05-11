<?php
/*
// Connect to database
include_once 'connect.php';

// get the information passed
// NOTE: 'get' does not have anything to do with "_GET['x']"
$latitude = $_GET['lat'];
$longitude = $_GET['lng'];

// Create the SQL query
// examplegamestore is the table's name
// NOTE: examplegamestore is NOT the database's name
$sql = "DELETE FROM examplegamestore
        WHERE latitude = '$latitude' AND longitude = '$longitude';";

// Send the request and output data
echo mysqli_query($conn,$sql);
echo  "<br><br>" ;
echo $sql;
echo  "<br><br>" ;
echo "DONE";
echo  "<br><br>" ;
*/
?>

function _deleteINFO(lat, lng){
  // Create the request
  xmlhttp = new XMLHttpRequest();

  // Form the request
  // Use the GET method
  // Call the deleteINFO.php script
  // Pass some vars
  // sync
  xmlhttp.open("GET","databaseHandlers/deleteINFO.php?"
  +"&lat="+lat
  +"&lng="+lng
  ,true);

  // Sent the request
  xmlhttp.send();
}
