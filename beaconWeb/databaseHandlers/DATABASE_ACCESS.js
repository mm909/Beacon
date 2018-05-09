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

  // Return the array of JSON objects from our database
  return _markers;
}

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

// Goal -> Function takes in params like:
// name, address, lat, lng, ...
// Basically all of the things needed to create a table in the database
// This funcion will then make an ajax request and add it to ALL databases

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
  // Create the request
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

  // Sent the request
  xmlhttp.send();
}
