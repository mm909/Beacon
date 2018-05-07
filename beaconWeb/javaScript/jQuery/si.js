
function mapReady(){

  console.log(gameStore);

  for(var i = 0; i < gameStore.length; i++){
    var storeName = gameStore[i].gameStoreName;
    var description = gameStore[i].description;
    var logo = gameStore[i].logo;

    $( "#containerForSIItems" ).append(
      '<div id=store' + i + ' class="tab"></div>'
    );

    $( '#store'+i ).append(
      '<div id=SIHeader' + i + ' class="SIHeader"></div>'
    );


    $( '#SIHeader'+i ).append(
      '<div id=storeName' + i + ' class="storeName"></div>'
    );
    $( '#SIHeader'+i ).append(
      '<div id=GSSIlogoBox' + i + ' class="GSSIlogoBox"></div>'
    );


    $( '#storeName'+i ).append(
      '<p class="gameStoreName">'+ storeName + '</p>'
    );
    $( '#GSSIlogoBox'+i ).append(
      '<img class="GSSIlogo" src='+ logo + '>'
    );

  }


  $( "#containerForSIItems" ).append(
    '<div id=store'+ ' class="tab"><p>Testing</p></div>'
  );

}
