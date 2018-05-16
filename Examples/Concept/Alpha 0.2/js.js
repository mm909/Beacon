
var nav = false;

function Nav() {
  if(nav){
    document.getElementById("myNav").style.height = "0%";
    nav = false;
  } else {
    document.getElementById("myNav").style.height = "100%";
    nav = true;
  }
}
