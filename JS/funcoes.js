$(document).ready(function(){

    // Validação do formulário + mensagem de sucesso + reset
    $('#formulario').submit(function(e) {
      e.preventDefault();
  
      let nome = $('#nome').val().trim();
      let email = $('#email').val().trim();
      let Telefone = $('#Telefone').val().trim();
      let Estado = $('#Estado').val().trim();
      let Motivo = $('#Motivo').val().trim();
  
      if(nome === '') {
        alert('Preencha o campo nome!');
        return;
      }
  
      if(email === '') {
        alert('Preencha o campo email!');
        return;
      }
  
      if(Telefone === '') {
        alert('Preencha o campo telefone!');
        return;
      }
  
      if(Estado === '') {
        alert('Preencha o campo estado!');
        return;
      }
  
      if(Motivo === '') {
        alert('Preencha o campo motivo!');
        return;
      }
  
      // Se passou em todas as validações, mostra mensagem, reseta form e some com a mensagem depois
      if ($('#mensagem-status').length === 0) {
        $('<p id="mensagem-status" style="color: green; font-weight: bold;"></p>').insertAfter('#But123');
      }
      $('#mensagem-status').text('Mensagem enviada com sucesso!').show();
  
      $('#formulario')[0].reset();
  
      setTimeout(function() {
        $('#mensagem-status').fadeOut();
      }, 3000);
    });
  
    // Mudança de cor no foco da barra de pesquisa (input text dentro #barra-pesquisa)
    $('#barra-pesquisa input[type="text"]').focus(function(){
      $(this).css('background-color', '#f0f8ff');
    }).blur(function(){
      $(this).css('background-color', '');
    });
  
    // Efeito de zoom em #div2 no mouseover/mouseout
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
  