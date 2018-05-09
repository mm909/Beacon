<?php

/*
var Player = {
  GSID:
  gameStoreName:
  playersDND:
  playersMagic:
  playersOther:
  playersPokemon:
  playersTotal:
  playersWarhammer:
  playersYugioh:
}

var Player = {
  GSID: 1,
  gameStoreName: "Darkside Games",
  playersDND: 0,
  playersMagic: 1,
  playersOther: 0,
  playersPokemon: 0,
  playersTotal: 1,
  playersWarhammer: 0,
  playersYugioh: 0
}
*/

// Connect to database
include_once 'CONNECT.php';

$GSID = $_GET['GSID'];
$gameStoreName = $_GET['gameStoreName'];
$playersDND = $_GET['playersDND'];
$playersMagic = $_GET['playersMagic'];
$playersOther = $_GET['playersOther'];
$playersPokemon = $_GET['playersPokemon'];
$playersTotal = $_GET['playersTotal'];
$playersWarhammer = $_GET['playersWarhammer'];
$playersYugioh = $_GET['playersYugioh'];

// Create the SQL query
$sql = "UPDATE `currentplayerinfo`
        SET playersTotal = playersTotal - $playersTotal,
            playersDND = playersDND - $playersDND,
            playersMagic = playersMagic - $playersMagic,
            playersOther = playersOther - $playersOther,
            playersPokemon = playersPokemon - $playersPokemon,
            playersWarhammer = playersWarhammer - $playersWarhammer,
            playersYugioh = playersYugioh - $playersYugioh
        WHERE GSID = $GSID;";

// Send the request and output data
echo mysqli_query($conn,$sql);
echo  "<br><br>" ;
echo $sql;
echo  "<br><br>" ;
echo "DONE";
echo  "<br><br>" ;
?>
