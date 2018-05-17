<?php

/*
var EventObject = {
  GSID:
  gameStoreName:
  eventName:
  description:
  prizes:
  eventDateTime:
  eventFee:
  expectedPlayers:
}

var EventObject = {
  GSID: 1,
  gameStoreName: "Darkside Games",
  eventName: "FNM",
  description: "This is Friday Night Magic",
  prizes: "Lots of stuff",
  eventDateTime: '2018-05-09 20:00:00',
  eventFee: 10.00,
  expectedPlayers: 20
}
*/

// Connect to database
include_once 'CONNECT.php';

// get the information passed
// NOTE: 'get' does not have anything to do with "_GET['x']"
$GSID = $_GET['GSID'];
$gameStoreName = $_GET['gameStoreName'];
$eventName = $_GET['eventName'];
$description = $_GET['description'];
$prizes = $_GET['prizes'];
$eventDateTime = $_GET['eventDateTime'];
$eventFee = $_GET['eventFee'];
$expectedPlayers = $_GET['expectedPlayers'];

// Create the SQL query
$sql = "INSERT INTO `eventinfo`(`GSID`, `gameStoreName`, `eventname`, `description`, `prizes`, `eventDateTime`, `eventFee`, `expectedPlayers`)
VALUES ('$GSID','$gameStoreName','$eventName','$description','$prizes', '$eventDateTime', '$eventFee', '$expectedPlayers');";

// Send the request and output data
echo mysqli_query($conn,$sql);
echo mysqli_error($conn);
echo  "<br><br>" ;
echo $sql;
echo  "<br><br>" ;
echo "DONE";
echo  "<br><br>" ;
?>
