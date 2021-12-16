// Loader

$("#tsm-loader").show();

setTimeout(function () {
    $("#tsm-loader").fadeOut();
}, 2000);

// Typed Jquery
$(".typed").each(function () {
    var typed = new Typed('.typed', {
        stringsElement: '.typed-strings',
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
    });
});

// Portfolio

$('.tsm-portfolio-filters ul li').click(function () {
    $('.tsm-portfolio-filters ul li').removeClass('active');
    $(this).addClass('active');

    var data = $(this).attr('data-filter');
    $grid.isotope({
        filter: data
    })
});

var $grid = $(".tsm-grid").isotope({
    itemSelector: ".all",
    percentPosition: true,
    masonry: {
        columnWidth: ".all"
    }
})


// Portfolio Gallery

$('.tsm-grid').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    gallery: {
        enabled: true
    }
});


// Swiper
var swiper = new Swiper(".testimonialSwiper", {
    slidesPerView: 2,
    spaceBetween: 0,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 2,
        },
    }
});


// Smooth Scrolling
function scrollNav() {
    $('.scroll').click(function () {
        $(".active").removeClass("active");
        $(this).addClass("active");

        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 62
        }, 1000);
        return false;
    });
}
scrollNav();

// Header

$(document).ready(function () {

    // var wow = new WOW({
    //     boxClass: 'wow', // animated element css class (default is wow)
    //     animateClass: 'animated', // animation css class (default is animated)
    //     offset: -500, // distance to the element when triggering the animation (default is 0)
    //     mobile: false // trigger animations on mobile devices (true is default)
    // });
    // wow.init();

    stickyHeader();
    $(window).scroll(function () {
        stickyHeader();
    });


    function stickyHeader() {
        var sticky = $('#tsm-header');
        var scTop = $(document).scrollTop();
        if (scTop > 1) {
            sticky.addClass('navbar-sticky-on')
        } else {
            sticky.removeClass('navbar-sticky-on')
        }
    }


    $(".navbar-toggler").click(function () {
        $('.hamburger-menu').toggleClass("animate");
        $("#tsm-header .collapse:not(.show)").toggleClass("menu-show");
        $("body").toggleClass("scroll-off");
        // $(".overlay-collapse").fadeToggle()

    });

    $(".navbar-nav .nav-item .nav-link").click(function () {
        $("#tsm-header .collapse:not(.show)").removeClass("menu-show");
        $("body").removeClass("scroll-off");
        $(".hamburger-menu").removeClass("animate");
    });



});