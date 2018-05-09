<?php

// Connect to database
include 'connect.php';

// Form the SQL query
$sql = "SELECT * FROM gamestoreinfo;";

// query and store the results
$result = mysqli_query($conn, $sql);

// Get the rows (Number of items returned)
$resultsCheck = mysqli_num_rows($result);

// Make a new array $jsonArray to store the returned objects
$jsonArray = array();

// Error check
if($resultsCheck > 0){
  // For every row
  // Get the information in that row
  // Store that row into the $jsonArray
  while($row = mysqli_fetch_assoc($result))
  {
      $jsonArray[] = $row;
  }
}

// NOTE: This is the return line
// IMPORTANT: This is how we get information from a PHP Script
//            to our JS code
// The stuff that is "echo"ed is then returned to the calling
// AJAX code as the varible "this.responce"
// NOTE: any other ECHO calls will cause an error in this code
echo json_encode($jsonArray);
?>
