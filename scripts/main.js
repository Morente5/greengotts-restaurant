"use strict";$("body").scrollspy({target:".fixed-top",offset:60}),(new WOW).init(),$("a.page-scroll").bind("click",function(t){var a=$(this);$("html, body").stop().animate({scrollTop:$(a.attr("href")).offset().top-45},1450,"easeInOutExpo"),t.preventDefault()}),$("#collapsingNavbar li a").click(function(){$(".navbar-toggler:not(.collapsed)").click()}),$("#galleryModal").on("show.bs.modal",function(t){$("#galleryImage").attr("src",$(t.relatedTarget).data("src"))}),initMap(37.171204,-3.59855);