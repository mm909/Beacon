<?php

/*
var BeaconObject = {
  GSID:
  gameStoreName:
  dateTimeCreated:
  dateTimeOfEvent:
  player1Name:
  player2Name:
  player3Name:
  player4Name:
  player5Name:
  player6Name:
  player7Name:
  player8Name:
  game:
  description:
  flags:
  Player1phone:
}

var BeaconObject = {
  GSID: 1,
  gameStoreName: "Darkside Games",
  dateTimeCreated: '2018-05-09 20:00:00',
  dateTimeOfEvent: '2018-05-09 22:00:00',
  player1Name: "Mikian",
  player2Name: "Mikians Frist Friend",
  player3Name: "Mikians Second Friend",
  player4Name: "Mikians Third Friend",
  player5Name: "Mikians Fourth Friend",
  player6Name: "Mikians Fifth Friend",
  player7Name: "Mikians Sixth Friend",
  player8Name: "Mikians Seventh Friend",
  game: "Magic!",
  description: "Looking for someone to play modern with.",
  flags: "modern free fun beginner allday",
  Player1phone: "7777777777"
}
*/

// Connect to database
require 'CONNECT.php';

$GSID = $_GET['GSID'];
$gameStoreName = $_GET['gameStoreName'];
$dateTimeCreated = $_GET['dateTimeCreated'];
$dateTimeOfEvent = $_GET['dateTimeOfEvent'];
$player1Name = $_GET['player1Name'];
$player2Name = $_GET['player2Name'];
$player3Name = $_GET['player3Name'];
$player4Name = $_GET['player4Name'];
$player5Name = $_GET['player5Name'];
$player6Name = $_GET['player6Name'];
$player7Name = $_GET['player7Name'];
$player8Name = $_GET['player8Name'];
$game = $_GET['game'];
$description = $_GET['description'];
$flags = $_GET['flags'];
$Player1phone = $_GET['Player1phone'];

// Create the SQL query
$sql = "INSERT INTO `beacons` (`GSID`, `gameStoreName`, `dateTimeCreated`, `dateTimeOfEvent`, `player1Name`, `player2Name`, `player3Name`, `player4Name`, `player5Name`, `player6Name`, `player7Name`, `player8Name`, `game`, `description`, `flags`, `Player1phone`)
VALUES                       ('{$GSID}','{$gameStoreName}','{$dateTimeCreated}','{$dateTimeOfEvent}','{$player1Name}','{$player2Name}','{$player3Name}','{$player4Name}','{$player5Name}','{$player6Name}','{$player7Name}','{$player8Name}','{$game}','{$description}','{$flags}','{$Player1phone}');";

// Send the request and output data
echo mysqli_query($conn,$sql);
echo mysqli_error($conn);
echo  "<br><br>" ;
echo $sql;
echo  "<br><br>" ;
echo "DONE";
echo  "<br><br>" ;
?>
