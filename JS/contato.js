document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-contato');

  form.addEventListener('submit', function (e) {
      e.preventDefault();

      const campos = ['nome', 'email', 'telefone', 'cargo', 'estado', 'motivo', 'mensagem'];
      let validado = true;

      for (let id of campos) {
          const campo = document.getElementById(id);
          if (!campo.value.trim()) {
              alert(`Por favor, preencha o campo: ${id}`);
              campo.focus();
              validado = false;
              break;
          }
      }

      if (validado) {
          alert('Formulário enviado com sucesso!');
          form.reset(); // Limpa todos os campos do formulário
      }
  });
});