$(document).ready(function() {
 
  $('#owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    responsive:{
        0: {
            items: 1
        },
        744: {
            items: 2
        },
        992: {
            items: 3
        }
    },
  });
 
});