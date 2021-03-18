$(document).ready(function() {


  /*  Sticky Nav  */

  var waypoint = new Waypoint({
    element: $('.js--section-about'),
    handler: function(direction) {
      if (direction == 'down') {
        $('.nav-bar').addClass('sticky-nav')
      } else {
        $('.nav-bar').removeClass('sticky-nav')
      }
    }, offset: '70px;'
  });

  /*  Scroll To Sections  */

  $('.js--scroll-to-home').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-home').offset().top}, 1000)
  });
  $('.js--scroll-to-about').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-about').offset().top - 70}, 1000)
  });
  $('.js--scroll-to-contact').click(function(){
    $('html, body').animate({scrollTop: $('.js--section-contact').offset().top - 69}, 1000)
  });


  /*  Mobile Nav  */
  $('.responsive-nav').click(function(){
    $('.mobile-nav-container').show()
  });
  $('.exit-mobile-nav').click(function(){
    $('.mobile-nav-container').hide()
  });
  $('.js--mobile-scroll-to-home').click(function(){
    $('.mobile-nav-container').hide();
    $('html, body').animate({scrollTop: $('.js--section-home').offset().top}, 1000);
  });
  $('.js--mobile-scroll-to-about').click(function(){
    $('.mobile-nav-container').hide();
    $('html, body').animate({scrollTop: $('.js--section-about').offset().top - 70}, 1000)
  });
  $('.js--mobile-scroll-to-contact').click(function(){
    $('.mobile-nav-container').hide();
    $('html, body').animate({scrollTop: $('.js--section-contact').offset().top - 69}, 1000)
  });

});
