$(document).ready(function() {
  $('.tooltip').tooltipster();
});

$(document).ready(function(){
  $('.wrapper-slick').slick({
    arrows: true,
    dots: true,
    prevArrow: "<i class='arrow-prev fa fa-angle-left'></i>",
    nextArrow: "<i class='arrow-next fa fa-angle-right'></i>",
    infinite: false,
    responsive: [
      {
      breakpoint: 768,
      settings: {
        arrows: false,
        }
      },
      {
      breakpoint: 480,
      settings: {
        }
      }
    ]
  });
});

function togglePersonalization(){
  body = $(".msg-highlight"); 
  textOnLoad = $(".msg-highlight").text();
  textChanged = "{!Personalization}"; 

  if(body.text==textChanged) {
    body.text(textOnLoad);
  }

  if(body.text()==textOnLoad) {
    body.text(textChanged);
  }
}


