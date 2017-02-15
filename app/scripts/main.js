$('body').scrollspy({
    target: '.fixed-top',
    offset: 60
});

new WOW().init();

$('a.page-scroll').bind('click', function(event) {
    var $ele = $(this);
    $('html, body').stop().animate({
        scrollTop: ($($ele.attr('href')).offset().top - 45)
    }, 1450, 'easeInOutExpo');
    event.preventDefault();
});

$('#collapsingNavbar li a').click(function() {
    /* always close responsive nav after click */
    $('.navbar-toggler:not(.collapsed)').click();
});

$('#galleryModal').on('show.bs.modal', function (e) {
   $('#galleryImage').attr('src',$(e.relatedTarget).data('src'));
});
