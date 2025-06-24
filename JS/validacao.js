document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form');

  form.addEventListener('submit', function (e) {
      e.preventDefault(); // Impede envio automático

      // Captura os campos
      const nome = document.getElementById('text');
      const email = document.getElementById('email2');
      const telefone = document.getElementById('tel');
      const idade = document.getElementById('number');
      const data = document.getElementById('date');
      const hora = document.getElementById('time');
      const estado = document.getElementById('estado');
      const genero = document.querySelector('input[name="genero"]:checked');
      const mensagem = document.getElementById('mensagem');

      // Verificações
      if (!nome.value.trim()) {
          alert('Por favor, preencha o nome.');
          nome.focus();
          return;
      }

      if (!email.value.trim()) {
          alert('Informe um e-mail válido.');
          email.focus();
          return;
      }

      if (!estado.value) {
          alert('Selecione um tema.');
          estado.focus();
          return;
      }

      if (!genero) {
          alert('Selecione um gênero.');
          return;
      }

      if (!mensagem.value.trim()) {
          alert('A mensagem de recomendação é obrigatória.');
          mensagem.focus();
          return;
      }

      // Tudo validado
      alert('Formulário enviado com sucesso!');
      form.reset();
  });

  // Função auxiliar para validar e-mail
  function validateEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
  }
});
