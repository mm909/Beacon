// javascript file for database acessing functions

// These funstions use AJAX protocals to run PHP scrips on the server side
// While the javascript is running on the client side

// RECIEVE - Get information from the database
//           Usually marker information
// SUBMIT  - Send information to the database
//           Usually a new maker posistion
// DELETE  - Delete information for a database
//           Uses the lat and lng to find and delete a
//           row in the database


function _receiveINFO(){
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
  xmlhttp.open("GET", "receiveINFO.php", false);
  xmlhttp.send();

  // Return the array of JSON objects from our database
  return _markers;
}

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
  xmlhttp.open("GET","submitINFO.php?"
  +"name="+name
  +"&lat="+lat
  +"&lng="+lng
  +"&players="+players
  +"&description="+description
  ,true);

  // Sent the request
  xmlhttp.send();
}

function _deleteINFO(lat, lng){
  // Create the request
  xmlhttp = new XMLHttpRequest();

  // Form the request
  // Use the GET method
  // Call the deleteINFO.php script
  // Pass some vars
  // sync
  xmlhttp.open("GET","deleteINFO.php?"
  +"&lat="+lat
  +"&lng="+lng
  ,true);

  // Sent the request
  xmlhttp.send();
}
