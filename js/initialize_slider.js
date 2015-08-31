$('.wrapper-slick').on('init', function(event, slick){
  $('.arrow-prev').addClass('arrow-inactive');
});

$('.wrapper-slick').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  switch (currentSlide) {
    case 0: 
      $('#ttip-location').tooltipster('hide');
      break;
    case 1: 
      $('#ttip-subject').tooltipster('hide');
      break;
    case 2: 
      $('#ttip-timestamp').tooltipster('hide');
      break;
  }
});

$('.wrapper-slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
  switch (currentSlide) {
    case 0: 
      $('#ttip-location').tooltipster('show');
      $('.arrow-prev').addClass('arrow-inactive');
      $('.arrow-next').removeClass('arrow-inactive');
      break;
    case 1: 
      $('#ttip-subject').tooltipster('show');
      $('.arrow-prev').removeClass('arrow-inactive');
      $('.arrow-next').removeClass('arrow-inactive');
      break;
    case 2: 
      $('#ttip-timestamp').tooltipster('show');
      $('.arrow-next').addClass('arrow-inactive');
      $('.arrow-prev').removeClass('arrow-inactive');
      break;
  }
});
        

  $(window).load(function() {
    $("#ttip-location").tooltipster('show');
  });