$(document).ready(function () {
    scrolled();
});

$(window).scroll(function () {
    scrolled();
});

function scrolled() {
    var navHeight = $('#main-nav').outerHeight();
    var scrolled = $(window).scrollTop();

    if (scrolled > navHeight) {
        $('#main-nav').addClass('scrolled');
    } else {
        $('#main-nav').removeClass('scrolled');
    }
}

$("#navbarNav li a").click(function (event) {
    var toggle = $(".navbar-toggler").is(":visible");
    if (toggle) {
        $(".navbar-collapse").collapse('hide');
    }
});
