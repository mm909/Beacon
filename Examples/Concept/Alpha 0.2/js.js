function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var nav = false;
var si = false;

function Nav() {
  if(nav){
    document.getElementById("myNav").style.height = "0%";
    nav = false;
  } else {
    document.getElementById("myNav").style.height = "100%";
    nav = true;
  }
}

function openSITable(name){
  console.log(name);

  if(si){
    $('#map').css('height',$('#map').height()*2);
    si = false;
  } else {
    $('#map').css('height',$('#map').height()/2);
    si = true;
  }

  if(name == 'Stores' && si){
    $('.tableStores').css('display','block');
  }
  if(name == 'Stores' && !si){
    setTimeout(function() { $('.tableStores').css('display','none'); }, 500);
  }
  if(name == 'Beacons' && si){
    $('.tableBeacons').css('display','block');
  }
  if(name == 'Beacons' && !si){
    setTimeout(function() { $('.tableBeacons').css('display','none'); }, 500);
  }
  if(name == 'Events' && si){
    $('.tableEvents').css('display','block');
  }
  if(name == 'Events' && !si){
    setTimeout(function() { $('.tableEvents').css('display','none'); }, 500);
  }

}
