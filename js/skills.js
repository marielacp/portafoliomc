$(document).ready(function () {
     
//PROGRESBAR
$(function(){
    setInterval(function(){
      $(".bootstrap").animate({"width":"0%"})
        .animate({"width":"80%"},2000)
        .delay(7000)
        .animate({"opacity":"0"},1000)
        .animate({"width":"0%"})
        .animate({"opacity":"1"})
},100);

  setInterval(function () {
    $(".materialize").animate({ "width": "0%" })
      .animate({ "width": "70%" }, 2000)
      .delay(7000)
      .animate({ "opacity": "0" }, 1000)
      .animate({ "width": "0%" })
      .animate({ "opacity": "1" })
  }, 100);

setInterval(function () {
    $(".html").animate({ "width": "0%" })
        .animate({ "width": "95%" }, 2000)
        .delay(7000)
        .animate({ "opacity": "0" }, 1000)
        .animate({ "width": "0%" })
        .animate({ "opacity": "1" })
}, 400);

setInterval(function () {
    $(".css").animate({ "width": "0%" })
        .animate({ "width": "80%" }, 2000)
        .delay(7000)
        .animate({ "opacity": "0" }, 1000)
        .animate({ "width": "0%" })
        .animate({ "opacity": "1" })
}, 200);

setInterval(function () {
    $(".figma").animate({ "width": "0%" })
        .animate({ "width": "83%" }, 2000)
        .delay(7000)
        .animate({ "opacity": "0" }, 1000)
        .animate({ "width": "0%" })
        .animate({ "opacity": "1" })
}, 150);

setInterval(function () {
    $(".marvel").animate({ "width": "0%" })
        .animate({ "width": "75%" }, 2000)
        .delay(7000)
        .animate({ "opacity": "0" }, 1000)
        .animate({ "width": "0%" })
        .animate({ "opacity": "1" })
}, 500);
/*
*/
});
});