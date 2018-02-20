$(document).ready(function () {
  //SLIDER PROYECTOS.
    $("#acerca").click(function (event) {
        $(".container-acercademi").fadeIn(4000);
    });

    $(function () {
        $(".slides").slidesjs({
            play: {
                active: true, // [boolean] Generate the play and stop buttons. // You cannot use your own buttons. Sorry. 
                effect: "slide",
                // [string] Can be either "slide" or "fade". 
                interval: 4000,
                // [number] Time spent on each slide in milliseconds. 
                auto: true,
                // [boolean] Start playing the slideshow on load. 
                swap: true,
                // [boolean] show/hide stop and play buttons 
                pauseOnHover: false,
                // [boolean] pause a playing slideshow on hover 
                restartDelay: 3000
                //[number] restart delay on inactive slideshow 
            }
        });
    });

//PROGRESBAR



});