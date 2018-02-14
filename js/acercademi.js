$(document).ready(function () {
  
    $("#acerca").click(function (event) {
        $(".container-acercademi").fadeIn(4000);
    });
 



$(function () {
    var $jittery = $('.texto'),
        aText = $jittery.text().split(''),
        letters = '';

    for (var i = 0; i < aText.length; i++) {
        letters += '<span>' + aText[i] + '</span>';
    }

    $jittery.empty().append(letters);

    $.each($('span', $jittery), function (i) {
        $(this).css('animation-delay', '-' + i + '70ms');
    });
});

});