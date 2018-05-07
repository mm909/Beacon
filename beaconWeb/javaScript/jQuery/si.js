
function mapReady(){

  console.log(gameStore);

  for(var i = 0; i < gameStore.length; i++){
    var storeName = gameStore[i].gameStoreName;
    var description = gameStore[i].description;
    var logo = gameStore[i].logo;
    console.log(logo)
    $( "#containerForSIItems" ).append(
      '<div id=store' + i + ' class="tab"></p></div>'
    );

    $( '#store'+i ).append(
      '<p class="gameStoreName">'+ storeName + '</p>'
    );

    $( '#store'+i ).append(
      '<img class="logo" src='+ logo + '>'
    );
  }


}
