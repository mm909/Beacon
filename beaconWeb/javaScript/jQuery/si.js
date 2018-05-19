var si = false;

function openSITable(name){

  if(si){
    $('#map').css('height',$('#map').height()*1.5);
    si = false;
  } else {
    $('#map').css('height',$('#map').height()/1.5);
    si = true;
  }

  if(name == 'Stores' && si){
    $('.tableStores').css('display','grid');
    $('.si').css('display','block');
  }
  if(name == 'Stores' && !si){
    setTimeout(function() { $('.tableStores').css('display','none'); $('.si').css('display','none'); }, 500);
  }
  if(name == 'Beacons' && si){
    $('.tableBeacons').css('display','grid');
    $('.si').css('display','block');
  }
  if(name == 'Beacons' && !si){
    setTimeout(function() { $('.tableBeacons').css('display','none'); $('.si').css('display','none'); }, 500);
  }
  if(name == 'Events' && si){
    $('.tableEvents').css('display','grid');
    $('.si').css('display','block');
  }
  if(name == 'Events' && !si){
    setTimeout(function() { $('.tableEvents').css('display','none'); $('.si').css('display','none'); }, 500);
  }
}
