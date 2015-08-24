$(document).ready(function() {
  $('.tooltip').tooltipster();
});

$(document).ready(function(){
  $('.wrapper-slick').slick({
    arrows: false,
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


