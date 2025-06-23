$(document).ready(function() {
    $('#But123').click(function(event) {
      event.preventDefault();
  
      // Limpa o formulário
      $('#formulario')[0].reset();
  
      // Remove qualquer modal anterior, para evitar duplicação
      $('#modal-confirmacao').remove();
  
      // Cria o modal com jQuery e CSS inline
      const modal = $(`
        <div id="modal-confirmacao" style="
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-color: rgba(0,0,0,0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 10000;
        ">
          <div style="
            background: white;
            padding: 20px 30px;
            border-radius: 8px;
            text-align: center;
            box-shadow: 0 0 15px rgba(0,0,0,0.3);
            min-width: 300px;
            font-family: Arial, sans-serif;
          ">
            <p style="margin: 0 0 15px; font-weight: bold; color: #14552d;">
              Mensagem enviada com sucesso!
            </p>
            <button id="fechar-modal" style="
              padding: 8px 16px;
              border: none;
              background-color: #14552d;
              color: white;
              font-weight: bold;
              border-radius: 4px;
              cursor: pointer;
            ">Fechar</button>
          </div>
        </div>
      `);
  
      // Adiciona o modal ao body
      $('body').append(modal);
  
      // Evento para fechar o modal ao clicar no botão
      $('#fechar-modal').click(function() {
        $('#modal-confirmacao').fadeOut(function() {
          $(this).remove();
        });
      });
  
      // Fecha modal se clicar fora do conteúdo
      $('#modal-confirmacao').click(function(event) {
        if (event.target == this) {
          $(this).fadeOut(function() {
            $(this).remove();
          });
        }
      });
    });
  });