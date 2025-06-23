$(document).ready(function() {
  $('#But123').click(function(event) {
    event.preventDefault();

    // Se não existe o parágrafo, cria
    if ($('#mensagem-status').length === 0) {
      $('<p id="mensagem-status" style="color: green; font-weight: bold;"></p>').insertAfter('#But123');
    }

    $('#mensagem-status').text('Mensagem enviada com sucesso!').show();

    $('#formulario')[0].reset();

    setTimeout(function() {
      $('#mensagem-status').fadeOut();
    }, 3000);
  });
});