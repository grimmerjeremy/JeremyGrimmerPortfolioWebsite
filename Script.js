$(document).ready(function(){
    //Carousel

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                itmes: 1,
                nav: false
            },
            600:{
                itmes: 2,
                nav: false
            },
            1000:{
                itmes: 3,
                nav: false
            }
        }
    });



});