
var button = document.createElement("button");
    button.setAttribute("id", "firstButton");
    button.innerHTML= "Change Map Size";

    button.addEventListener("click", function(){
      //console.log("this did indeed work");
      var mapDIV = document.getElementById("map");
      mapDIV.style.width = (map.startingWidth - 10) + "vh";
      map.startingWidth -= 10;
      //console.log(map.style.width);
    });

var element = document.getElementById("summaryInformation");
    element.appendChild(button);
