$(document).ready(function() {
    $('#div2').mouseover(function() {
      $(this).css({
        'transform': 'scale(1.1)',
        'transition': 'transform 0.3s ease'
      });
    }).mouseout(function() {
      $(this).css({
        'transform': 'scale(1)',
        'transition': 'transform 0.3s ease'
      });
    });
  });