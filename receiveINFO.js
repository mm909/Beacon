
function _receiveINFO(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
         _markers = JSON.parse(this.responseText);
      }
  };
  xmlhttp.open("GET", "receiveINFO.php", false);
  xmlhttp.send();
  return _markers;
}
