$(document).ready(function() {
  $('.main-arrow').on('click', function(){
    $('html, body').animate({
        scrollTop: $("#down").offset().top
    }, 800);
    return false;
  });
});