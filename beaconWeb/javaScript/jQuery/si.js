
function mapReady(){

  console.log(gameStore);

  for(var i = 0; i < gameStore.length; i++){
    var storeName = gameStore[i].gameStoreName;
    var description = gameStore[i].description;
    $( "#containerForSIItems" ).append(
      '<div class="tab"><p>' + storeName + '</p></div>'
    );
  }


}
