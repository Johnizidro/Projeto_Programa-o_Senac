$(document).ready(function(){ 
    $('#formulario').submit(function(e){ 
      // Pega os valores dos campos
      let nome = $('#nome').val().trim();
      let email = $('#email').val().trim();
      let Telefone = $('#Telefone').val().trim();
      let Estado = $('#Estado').val().trim();
      let Motivo = $('#Motivo').val().trim();
      
      // Validações
      if(nome === '') {
        alert('Preencha o campo nome!');
        e.preventDefault();
        return;
      }
  
      if(email === '') {
        alert('Preencha o campo email!');
        e.preventDefault();
        return;
      }
  
      if(Telefone === '') {
        alert('Preencha o campo telefone!');
        e.preventDefault();
        return;
      }
  
      if(Estado === '') {
        alert('Preencha o campo estado!');
        e.preventDefault();
        return;
      }
  
      if(Motivo === '') {
        alert('Preencha o campo motivo!');
        e.preventDefault();
        return;
      }
  
      // Aqui, se precisar validar o campo "cargo" pelo name, você pode usar:
      // let cargo = $('[name="cargo"]').val().trim();
      // e validar da mesma forma.
  
    });
  });