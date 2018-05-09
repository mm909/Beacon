// javascript file for database acessing functions

function _RECEIVE_GAMESTORES(){
  var xmlhttp = new XMLHttpRequest();

  // This function executes once the PHP script finishes
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // This.responceText is everything that the PHP script 'echo'ed
        // The receiveINFO.php script echos a json'ed version of a SQL query
        // We then take that echo'ed text and parse it into an array
         _markers = JSON.parse(this.responseText);
      }
  };

  // Actually send the request
  // Using the "GET" php protocals
  // Script in "receiveINFO"
  // Run the script async meaning that the js must wait until this finishes
  xmlhttp.open("GET", "databaseHandlers/RECEIVE_GAMESTORES.php", false);
  xmlhttp.send();

  // Return the array of JSON objects from our database
  return _markers;
}

function _RECEIVE_PLAYERS(){
  var xmlhttp = new XMLHttpRequest();

  // This function executes once the PHP script finishes
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        // This.responceText is everything that the PHP script 'echo'ed
        // The receiveINFO.php script echos a json'ed version of a SQL query
        // We then take that echo'ed text and parse it into an array


         _markers = JSON.parse(this.responseText);
      }
  };

  // Actually send the request
  // Using the "GET" php protocals
  // Script in "receiveINFO"
  // Run the script async meaning that the js must wait until this finishes
  xmlhttp.open("GET", "databaseHandlers/RECEIVE_PLAYERS.php", false);
  xmlhttp.send();

  // Return the array of JSON objects from our database
  return _markers;
}

function _RECEIVE_EVENTS(){
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         _markers = JSON.parse(this.responseText);
      }
  };

  xmlhttp.open("GET", "databaseHandlers/RECEIVE_EVENTS.php", false);
  xmlhttp.send();

  return _markers;
}

/* --- */

/*
var PlayerObject = {
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

var PlayerObject = {
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

function _SUBMIT_PLAYER(PlayerObject){
  xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET","databaseHandlers/SUBMIT_PLAYER.php?"
  +"GSID="+PlayerObject.GSID
  +"&gameStoreName="+PlayerObject.gameStoreName
  +"&playersDND="+PlayerObject.playersDND
  +"&playersMagic="+PlayerObject.playersMagic
  +"&playersOther="+PlayerObject.playersOther
  +"&playersPokemon="+PlayerObject.playersPokemon
  +"&playersTotal="+PlayerObject.playersTotal
  +"&playersWarhammer="+PlayerObject.playersWarhammer
  +"&playersYugioh="+PlayerObject.playersYugioh
  ,true);

  xmlhttp.send();
}

/*
var PlayerObject = {
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

var PlayerObject = {
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

function _REMOVE_PLAYER(PlayerObject){
  xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET","databaseHandlers/REMOVE_PLAYER.php?"
  +"GSID="+PlayerObject.GSID
  +"&gameStoreName="+PlayerObject.gameStoreName
  +"&playersDND="+PlayerObject.playersDND
  +"&playersMagic="+PlayerObject.playersMagic
  +"&playersOther="+PlayerObject.playersOther
  +"&playersPokemon="+PlayerObject.playersPokemon
  +"&playersTotal="+PlayerObject.playersTotal
  +"&playersWarhammer="+PlayerObject.playersWarhammer
  +"&playersYugioh="+PlayerObject.playersYugioh
  ,true);

  xmlhttp.send();
}

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

function _SUBMIT_EVENT(EventObject){
  xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET","databaseHandlers/SUBMIT_EVENT.php?"
  +"GSID="+EventObject.GSID
  +"&gameStoreName="+EventObject.gameStoreName
  +"&eventName="+EventObject.eventName
  +"&description="+EventObject.description
  +"&prizes="+EventObject.prizes
  +"&eventDateTime="+EventObject.eventDateTime
  +"&eventFee="+EventObject.eventFee
  +"&expectedPlayers="+EventObject.expectedPlayers
  ,true);

  xmlhttp.send();
}

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

function _SUBMIT_GAMESTORE(gameStoreObject){
  xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET","databaseHandlers/addNewGameStore.php?"
  +"gameStoreName="+gameStoreObject.gameStoreName
  +"&latitude="+gameStoreObject.latitude
  +"&longitude="+gameStoreObject.longitude
  +"&description="+gameStoreObject.description
  +"&street="+gameStoreObject.street
  +"&state="+gameStoreObject.state
  +"&city="+gameStoreObject.city
  +"&zip="+gameStoreObject.zip
  +"&phone="+gameStoreObject.phone
  +"&logo="+gameStoreObject.logo
  +"&email="+gameStoreObject.email
  ,true);

  xmlhttp.send();
}
