
function _submitINFO(name, lat, lng, players, description){
  xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET","submitINFO.php?"
  +"name="+name
  +"&lat="+lat
  +"&lng="+lng
  +"&players="+players
  +"&description="+description
  ,true);

  xmlhttp.send();
}
