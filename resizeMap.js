
var button = document.createElement("button");
    button.setAttribute("id", "firstButton");
    button.innerHTML= "Change Map Size";

    button.addEventListener("click", function(){
      console.log("this did indeed work");
      var map = document.getElementById("map");
          console.log(map);
    });

var element = document.getElementById("summaryInformation");
    element.appendChild(button);
