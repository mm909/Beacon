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


function _addNewGameStore(gameStoreObject){
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
