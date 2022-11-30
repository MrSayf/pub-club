// -----------------------------

//   js index
/* =================== */
/*  

*/
// -----------------------------


(function(jQuery) {
    "use strict";


    /*---------------------
    countdown
    --------------------- */
    jQuery('[data-countdown]').each(function() {
        var $this = jQuery(this),
            finalDate = jQuery(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime('<span class="cdown days"><span class="time-count">%-D</span> <p>Days</p></span> <span class="cdown hour"><span class="time-count">%-H</span> <p>Hour</p></span> <span class="cdown minutes"><span class="time-count">%M</span> <p>Min</p></span> <span class="cdown second"> <span><span class="time-count">%S</span> <p>Sec</p></span>'));
        });
    });

    /*---------------------
    preloader
    --------------------- */

    jQuery(window).on('load', function() {
        jQuery('#preloader').fadeOut('slow', function() { jQuery(this).remove(); });
    });


    /*----------------------------
     jQuery MeanMenu
    ------------------------------ */
    jQuery('nav#dropdown').meanmenu();

    /*-----------------
    meanmenu 
    -----------------*/
    jQuery('nav#mobile_menu_active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu-area .container',
    });

    /*-----------------
    sticky
    -----------------*/
    jQuery(window).on('scroll', function() {
        if (jQuery(window).scrollTop() > 300) {
            jQuery('header').addClass('navbar-fixed-top');
        } else {
            jQuery('header').removeClass('navbar-fixed-top');
        }
    });

    /*-----------------
    sticky mobile
    -----------------*/
    jQuery(window).on('scroll', function() {
        if (jQuery(window).scrollTop() > 85) {
            jQuery('.custom-mobile-menu-area').addClass('mobile-navbar-fixed-top');
        } else {
            jQuery('.custom-mobile-menu-area').removeClass('mobile-navbar-fixed-top');
        }
    });

    /*-----------------
    scroll-up
    -----------------*/
    jQuery.scrollUp({
        scrollText: '<i class="fa fa-arrow-up" aria-hidden="true"></i>',
        easingType: 'linear',
        scrollSpeed: 1500,
        animation: 'fade'
    });


    /*------------------------------
         counter
    ------------------------------ */
    jQuery('.counter-up').counterUp();


    /*------------------------------
         top-share-show-hide
    ------------------------------ */
    if(document.getElementById('share_by') !== null){
        document.getElementById("share_by").style.display = "none";
        jQuery("#ts_button").on('click', function() {
            jQuery("#share_by").fadeToggle("slow");
        });
    }

    /*---------------------
    smooth scroll
    --------------------- */
    jQuery('.smoothscroll').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;

        jQuery('html, body').stop().animate({
            'scrollTop': jQuery(target).offset().top - 80
        }, 1200);
    });


    /*-----------------------
        top-screenshot-carousel
    ------------------------*/
    function carousel_first_last() {
        var total = jQuery('.top-ss-carousel .owl-stage .owl-item.active').length;

        jQuery('.top-ss-carousel .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');

        jQuery('.top-ss-carousel .owl-stage .owl-item.active').each(function(index) {
            if (index === 0) {
                // this is the first one and this is for resize
                jQuery(this).addClass('firstActiveItem');
            }
            if (index === total - 1 && total > 1) {
                // this is the last one
                jQuery(this).addClass('lastActiveItem');
            }
        });
    }
    var carousel = jQuery('.top-ss-carousel').owlCarousel({
        items: 5,
        loop: true,
        responsiveClass: true,
        nav: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        center: true,
        navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3
            },
            1200: {
                items: 5
            }
        },
        onInitialized: function() {
            carousel_first_last();
        }
    });
    carousel.on('translated.owl.carousel', function(event) {
        carousel_first_last();
    });

    /*-----------------------
        screenshot-carousel
    ------------------------*/
    jQuery('.ss-carousel').owlCarousel({
        items: 5,
        loop: true,
        responsiveClass: true,
        nav: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 500,
        center: true,
        navText: ['<span class="ti-angle-left"></span>', '<span class="ti-angle-right"></span>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 3
            },
            1200: {
                items: 5
            }
        }
    });


    /*---------------------
    testimonial carousel
    --------------------- */
    jQuery('.testimonial-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 3000,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    /*---------------------
    related post carousel
    --------------------- */
    jQuery('.related-post-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


    /*---------------------
    twitter feed carousel
    --------------------- */
    jQuery('.twitter-feed-carousel').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    /*---------------------
    accordiion
    --------------------- */
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }


    /*----------------------------
        home-2-slider
    ------------------------------ */
    jQuery('#mainslider').nivoSlider({
        effect: 'random',
        slices: 15,
        boxCols: 12,
        boxRows: 4,
        animSpeed: 600,
        pauseTime: 5000000,
        startSlide: 0,
        controlNav: false,
        controlNavThumbs: false,
        pauseOnHover: false,
        manualAdvance: false,
        prevText: '<i class="fa fa-arrow-left nivo-prev-icon"></i>',
        nextText: '<i class="fa fa-arrow-right nivo-next-icon"></i>'

    });

     jQuery(document).ready(function(){
        jQuery('#mobile_menu_show .menu-item-has-children>a').append('<i class="fa  fa-chevron-down appcode-dropdown"></i>');
        jQuery('.appcode-dropdown').on('click',function(evnet){
            event.preventDefault();
            jQuery(this).closest('.menu-item-has-children').children('.sub-menu').slideToggle(500) ;
        });
    });

}(jQuery));
