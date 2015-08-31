$(document).ready(function() {
    $('.btn-primary').click(function() {
      $(".tooltipster-base").hide(); 
      $('.wrapper-slick').slick('slickPause');
    }); 

    $('#ttip-location').tooltipster({
        content: $('<p>Nova crafts custom introductory paragraphs for each of your recipients.</p>'),
        multiple: true, 
        interactive: true,
    });

    $('#ttip-subject').tooltipster({
        content: $('<p>Nova creates individualized subject lines that get opens.</p>'),
        multiple: true, 
        interactive: true,
    });

    $('#ttip-timestamp').tooltipster({
        content: $('<p>Nova knows when each of your recipients are active and sends your emails at the best possible time.</p>'),
        multiple: true, 
        interactive: true,
    });
});
