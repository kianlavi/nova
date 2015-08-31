$(document).ready(function() {
  pson = $('.personalization-1');
  subj = $('.subject-2');
  time = $('.timestamp-3');

  subj.addClass('msg-highlight').attr('id', 'ttip-subject');
  time.addClass('msg-highlight').attr('id', 'ttip-timestamp');
});


$(document).ready(function() {
  $('.tooltip').tooltipster();
});

$(document).ready(function(){
  $('.wrapper-slick').slick({
    arrows: true,
    autoplay: true,
    autoplaySpeed: 10000,
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
        arrows: false,
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.wrapper-slick2').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    arrows: false,
    prevArrow: "<i class='arrow-prev fa fa-angle-left'></i>",
    nextArrow: "<i class='arrow-next fa fa-angle-right'></i>",
    infinite: true,
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


