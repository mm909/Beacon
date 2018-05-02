
function _deleteINFO(lat, lng){
  xmlhttp = new XMLHttpRequest();

  xmlhttp.open("GET","deleteINFO.php?"
  +"&lat="+lat
  +"&lng="+lng
  ,true);

  xmlhttp.send();
}
