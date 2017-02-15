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

  $('#main-title').parallax({imageSrc: '../images/bg/bg-header.jpg'});
  updateSize();
});

function updateSize(){
  var minHeight = parseInt($('.owl-item').eq(0).css('height'));
  $('.owl-item').each(function () {
    var thisHeight = parseInt($(this).css('height'));
    minHeight = (minHeight <= thisHeight ? minHeight : thisHeight);
  });
  $('.owl-wrapper-outer').css('height',minHeight+'px');

  $('.owl-carousel .owl-item img').each(function(){
    var thisHeight = parseInt($(this).css('height'));
    if(thisHeight > minHeight){

      $(this).css('margin-top', -1 * (thisHeight - minHeight) / 2 + 'px');
      $(this).css('margin-bottom', -1 * (thisHeight - minHeight) / 2 + 'px');
    }
  });
}