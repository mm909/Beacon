<?php
include 'connect.php';


$sql = "SELECT * FROM examplegamestore;";
$result = mysqli_query($conn, $sql);
$resultsCheck = mysqli_num_rows($result);

$emparray = array();

if($resultsCheck > 0){
  while($row = mysqli_fetch_assoc($result))
  {
      $emparray[] = $row;
  }
}


echo json_encode($emparray);
?>
