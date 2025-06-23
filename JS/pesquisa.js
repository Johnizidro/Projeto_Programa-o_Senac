$(document).ready(function(){
    $('#barra-pesquisa input[type="text"]').focus(function(){
      $(this).css('background-color', '#f0f8ff');
    }).blur(function(){
      $(this).css('background-color', '');
    });
  });