// Simulação de login
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value;
  let senha = document.getElementById("senha").value;

  if(email && senha){
    // exemplo: redireciona para página principal após login
    window.location.href = "home.html";
  } else {
    alert("Preencha todos os campos!");
  }
});

// Redirecionamento para cadastro
document.getElementById("linkCadastro").addEventListener("click", function(e){
  e.preventDefault();
  window.location.href = "cadastro.html"; // redireciona para outra página
});