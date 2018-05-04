// -------------------
// Button creation
/*
{
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
}
*/
// -------------------

// -------------------
// Slider creation
{
var slider = document.createElement("input");
    slider.setAttribute("min", "1");
    slider.setAttribute("max", "70");
    slider.setAttribute("value", "50");
    slider.setAttribute("class", "slider");
    slider.setAttribute("type", "range");
    slider.setAttribute("id", "firstSlider");

    slider.setAttribute("oninput", "changedValue(this)");

var element = document.getElementById("wrap");
    element.appendChild(slider);
}
// -------------------

function changedValue(x){
      var mapDIV = document.getElementById("map");
      mapDIV.style.height = 100 - x.value + "vh";

}
