<?php
include_once 'connect.php';

$latitude = $_GET['lat'];
$longitude = $_GET['lng'];

$sql = "DELETE FROM examplegamestore
        WHERE latitude = '$latitude' AND longitude = '$longitude';";

mysqli_query($conn,$sql);
echo $sql;
echo "DONE";
?>
