const form = document.getElementById("form");
const lista = document.getElementById("lista-medicos");

let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];

function renderPacientes() {
  lista.innerHTML = "";
  pacientes.forEach((p, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${p.nome}</strong><br>
      CPF: ${p.cpf}<br>
      Telefone: ${p.telefone}<br>
      Email: ${p.email}<br>
      <button class="editar" onclick="editar(${index})">Editar</button>
      <button class="remover" onclick="remover(${index})">Remover</button>
      <button class="BotaoIr" onclick="irParaSite(${index})">Confirmar Cadastro</button>
    `;
    lista.appendChild(li);
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const novoPaciente = {
    nome: form.nome.value,
    cpf: form.cpf.value,
    telefone: form.telefone.value,
    email: form.email.value,
    senha: form.senha.value
  };
  pacientes.push(novoPaciente);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
  form.reset();
  renderPacientes();
});

function remover(index) {
  pacientes.splice(index, 1);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
  renderPacientes();
}

function editar(index) {
  const p = pacientes[index];
  form.nome.value = p.nome;
  form.cpf.value = p.cpf;
  form.telefone.value = p.telefone;
  form.email.value = p.email;
  form.senha.value = p.senha;
  pacientes.splice(index, 1);
  renderPacientes();
}

function irParaSite(index) {
  window.location.href = "login.html"; // ou qualquer página que você queira redirecionar
}

renderPacientes();
