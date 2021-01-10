const countDownDate = new Date("Mar 12, 2021 18:00:00").getTime();
const countdown_dias = setInterval(function() {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
    document.getElementById("days").innerHTML = days + " días "
    document.getElementById("hours").innerHTML = hours + " horas "
    document.getElementById("mins").innerHTML = minutes + " minutos "
    document.getElementById("secs").innerHTML = seconds + " segundos "

    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(countdown_dias);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "¡LLEGÓ EL MOMENTO!";
    }
}, 1000);
/*
var screenWidth = $(window).width();
var screenHeight = $(window).height();

$('#Bgs').css('max-width', screenWidth);
$('#Bgs').css('width', screenWidth);
*/
$(document).on('scroll', function() {
    if ($(document).scrollTop() >= ($('#section_header').offset().top) && $(document).scrollTop() < $('#section_historia').offset().top) {
        $('.scroll_dot1').removeClass('scroll_dot1').addClass('scroll_dot1A')
        $('.scroll_dot2A').removeClass('scroll_dot2A').addClass('scroll_dot2');
        $('.scroll_dot3A').removeClass('scroll_dot3A').addClass('scroll_dot3');
        $('.scroll_dot4A').removeClass('scroll_dot4A').addClass('scroll_dot4');
        $('.scroll_dot5A').removeClass('scroll_dot5A').addClass('scroll_dot5');
        $('.scroll_p1').removeClass('scroll_p1').addClass('scroll_p1A')
        $('.scroll_p2A').removeClass('scroll_p2A').addClass('scroll_p2');
        $('.scroll_p3A').removeClass('scroll_p3A').addClass('scroll_p3');
        $('.scroll_p4A').removeClass('scroll_p4A').addClass('scroll_p4');
        $('.scroll_p5A').removeClass('scroll_p5A').addClass('scroll_p5');
        $('.scroll_dotsV').removeClass('scroll_dotsV').addClass('scroll_dotsW');
        $('.scroll_dots').removeClass('scroll_dots').addClass('scroll_dotsW');
    }
    if ($(document).scrollTop() >= ($('#section_historia').offset().top - 500) && $(document).scrollTop() < $('#section_ceremonia').offset().top) {
        $('.scroll_dot2').removeClass('scroll_dot2').addClass('scroll_dot2A')
        $('.scroll_dot1A').removeClass('scroll_dot1A').addClass('scroll_dot1');
        $('.scroll_dot3A').removeClass('scroll_dot3A').addClass('scroll_dot3');
        $('.scroll_dot4A').removeClass('scroll_dot4A').addClass('scroll_dot4');
        $('.scroll_dot5A').removeClass('scroll_dot5A').addClass('scroll_dot5');
        $('.scroll_p2').removeClass('scroll_p2').addClass('scroll_p2A')
        $('.scroll_p1A').removeClass('scroll_p1A').addClass('scroll_p1');
        $('.scroll_p3A').removeClass('scroll_p3A').addClass('scroll_p3');
        $('.scroll_p4A').removeClass('scroll_p4A').addClass('scroll_p4');
        $('.scroll_dotsW').removeClass('scroll_dotsW').addClass('scroll_dots');
    }
    if ($(document).scrollTop() >= $('#section_ceremonia').offset().top - 400 && $(document).scrollTop() < $('#section_nueva').offset().top) {
        $('.scroll_dot3').removeClass('scroll_dot3').addClass('scroll_dot3A')
        $('.scroll_dot2A').removeClass('scroll_dot2A').addClass('scroll_dot2');
        $('.scroll_dot4A').removeClass('scroll_dot4A').addClass('scroll_dot4');
        $('.scroll_dot5A').removeClass('scroll_dot5A').addClass('scroll_dot5');
        $('.scroll_p3').removeClass('scroll_p3').addClass('scroll_p3A')
        $('.scroll_p2A').removeClass('scroll_p2A').addClass('scroll_p2');
        $('.scroll_p4A').removeClass('scroll_p4A').addClass('scroll_p4');
    }
    if ($(document).scrollTop() >= $('#section_nueva').offset().top - 400 && $(document).scrollTop() < $('#section_invitación').offset().top) {
        $('.scroll_dot4').removeClass('scroll_dot4').addClass('scroll_dot4A')
        $('.scroll_dot3A').removeClass('scroll_dot3A').addClass('scroll_dot3');
        $('.scroll_dot5A').removeClass('scroll_dot5A').addClass('scroll_dot5');
        $('.scroll_p4').removeClass('scroll_p4').addClass('scroll_p4A')
        $('.scroll_p3A').removeClass('scroll_p3A').addClass('scroll_p3');
        $('.scroll_p5A').removeClass('scroll_p5A').addClass('scroll_p5');
        $('.scroll_dotsW').removeClass('scroll_dotsW').addClass('scroll_dots');
    }

    if ($(document).scrollTop() >= ($('#section_invitación').offset().top - 400) && $(document).scrollTop() < $('#section_invitación').offset().top) {
        $('.scroll_dot5').removeClass('scroll_dot5').addClass('scroll_dot5A')
        $('.scroll_dot4A').removeClass('scroll_dot4A').addClass('scroll_dot4');
        $('.scroll_p5').removeClass('scroll_p5').addClass('scroll_p5A')
        $('.scroll_p4A').removeClass('scroll_p4A').addClass('scroll_p4');
        $('.scroll_dots').removeClass('scroll_dots').addClass('scroll_dotsW');
    }
});