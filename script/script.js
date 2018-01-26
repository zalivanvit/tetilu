$(document).ready(function() {

    $(".content").css("display", "none");

    $(".content").fadeIn(500);

    $("a.buttons__slide").click(function(event){
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);
        return false;
    });
});
