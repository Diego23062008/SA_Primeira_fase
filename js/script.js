// Captura o formulário
const form = document.getElementById("formCadastro");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const cpf = document.getElementById("cpf").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const senha = document.getElementById("senha").value;

  // Aqui pode ser adaptado para salvar em banco ou API
  alert(`Cadastro realizado com sucesso!\n\nNome: ${nome}\nCPF: ${cpf}\nEmail: ${email}\nTelefone: ${telefone}`);
  
  form.reset(); // Limpa os campos
});
