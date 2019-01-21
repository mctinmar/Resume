
// Navbar



// Logo


  /*
      Navigation
  */
  $('a.scroll-link').on('click', function(e) {
    e.preventDefault();
    scroll_to($(this), $('nav').outerHeight());
  });
  // toggle "navbar-no-bg" class
  $('.top-content .text').waypoint(function() {
    $('nav').toggleClass('navbar-no-bg');
  });

    /*
        Background slideshow
    */
    $('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    $('.section-4-container').backstretch("assets/img/backgrounds/1.jpg");

    /*
        Wow
    */
    new WOW().init();

});

// Navbar 2

(function ($) {

    var navbar = $('.navbar');
    var lastScrollTop = 0;

    $(window).scroll(function () {
        var st = $(this).scrollTop();
        // Scroll down
        if (st > lastScrollTop) {
            navbar.fadeOut();
        }
        // Scroll up but still lower than 200 (change that to whatever suits your need)
        else if(st < lastScrollTop && st > 100) {
            navbar.fadeIn();
            navbar.removeClass('navbar-light bg-transparent').addClass('navbar-dark bg-custom');
        }
        // Reached top
        else {
            navbar.removeClass('navbar-dark bg-custom').addClass('navbar-light bg-transparent');
        }
        lastScrollTop = st;
    });

})(jQuery);

// View More

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "view more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "view less";
    moreText.style.display = "inline";
  }
}






// Portfolio


(function($) {
    "use strict";

    // manual carousel controls
    $('.next').click(function(){ $('.carousel').carousel('next');return false; });
    $('.prev').click(function(){ $('.carousel').carousel('prev');return false; });

})(jQuery);
