  function hide() {
      var x = document.getElementsByClassName('card-text');
      var style = "none";

      if(x[0].style.display != style){
        x[0].style.display = style;
        x[0].style.backgroundColor = "#F933FF";
        x[1].style.display = style;
        x[1].style.backgroundColor = "#F933FF";
        x[2].style.display = style;
        x[2].style.backgroundColor = "#F933FF";
        x[3].style.display = style;
        x[3].style.backgroundColor = "#F933FF";
      }else{
        x[0].style.display = "";
        x[1].style.display = "";
        x[2].style.display = "";
        x[3].style.display = "";
      }

  
      

     
}
var myNav = document.getElementById("bar");
window.onscroll = function() {
    "use strict";
    if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
      myNav.classList.add("scroll");
    } else {
      myNav.classList.remove("scroll");
    }
  };