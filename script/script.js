$(document).ready(function() {

    $("body").on("touchstart", function(){
        if ( $(window).width() < 769 ) {
            if ( ( window.scrollY < $('#business-information').offset().top ) ){
                $('.navigation').hide();
                $('#step_1').show()
            } else if (( window.scrollY >= $('#business-information').offset().top ) && ( window.scrollY < $('#additional-information').offset().top )) {
                $('.navigation').hide();
                $('#step_2').show()
            } else if (( window.scrollY >= $('#additional-information').offset().top ) && ( window.scrollY < $('#services').offset().top )) {
                $('.navigation').hide();
                $('#step_3').show()
            } else if (( window.scrollY >= $('#services').offset().top )) {
                $('.navigation').hide();
                $('#step_4').show()
            }
        }
    });

    $(".content").css("display", "none");

    $(".content").fadeIn(500);

    $(".buttons__slide").click(function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);

            return false;
        });


});
