$(document).ready(function() {
    $('#div2').mouseover(function() {
      $(this).css({
        'transform': 'scale(1.05)',
        'transition': 'transform 0.3s ease'
      });
    }).mouseout(function() {
      $(this).css({
        'transform': 'scale(1)',
        'transition': 'transform 0.3s ease'
      });
    });
  });
  $(document).ready(function(){
    $('#barra-pesquisa input[type="text"]').focus(function(){
      $(this).css('background-color', '#f0f8ff');
    }).blur(function(){
      $(this).css('background-color', '');
    });
  });
  
 
  