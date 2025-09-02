const form = document.getElementById("form");
const lista = document.getElementById("lista-medicos");
const docName = document.getElementById("file-doc-name");
const certName = document.getElementById("file-cert-name");

let medicos = JSON.parse(localStorage.getItem("medicos")) || [];

function renderMedicos() {
  lista.innerHTML = "";
  medicos.forEach((m, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>${m.nome}</strong><br>
      CPF: ${m.cpf}<br>
      Telefone: ${m.telefone}<br>
      Email: ${m.email}<br>
      Documento: ${m.doc || "Nenhum"}<br>
      Certificado: ${m.certificado || "Nenhum"}<br>
      <button class="editar" onclick="editar(${index})">Editar</button>
      <button class="remover" onclick="remover(${index})">Remover</button>
    <form id="form">
     <button type="submit">Entrar no site</button>
    </form>
     <button id="btnConfirmar" style="display:none;">Confirmar</button>

    `;
    lista.appendChild(li);
  });
}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  const novoMedico = {
    nome: form.nome.value,
    cpf: form.cpf.value,
    telefone: form.telefone.value,
    email: form.email.value,
    senha: form.senha.value,
    doc: form.doc.files[0]?.name || "",
    certificado: form.certificado.files[0]?.name || ""
  };
  medicos.push(novoMedico);
  localStorage.setItem("medicos", JSON.stringify(medicos));
  form.reset();
  docName.textContent = "Nenhum arquivo";
  certName.textContent = "Nenhum arquivo";
  renderMedicos();
});

function remover(index) {
  medicos.splice(index, 1);
  localStorage.setItem("medicos", JSON.stringify(medicos));
  renderMedicos();
}

function editar(index) {
  const m = medicos[index];
  form.nome.value = m.nome;
  form.cpf.value = m.cpf;
  form.telefone.value = m.telefone;
  form.email.value = m.email;
  form.senha.value = m.senha;
  medicos.splice(index, 1);
  renderMedicos();
}

form.doc.addEventListener("change", () => {
  docName.textContent = form.doc.files[0]?.name || "Nenhum arquivo";
});
form.certificado.addEventListener("change", () => {
  certName.textContent = form.certificado.files[0]?.name || "Nenhum arquivo";
});

renderMedicos();


// botao ir para outra pagina

// Quando clicar em confirmar, vai para outra página
btnConfirmar.addEventListener("click", () => {
  window.location.href = "teste.html"; // muda para a página desejada
});


// Gerenciamento de inputs de arquivo
function setupFileInput(inputId, spanId) {
  const input = document.getElementById(inputId);
  const span = document.getElementById(spanId);

  input.addEventListener("change", function () {
    span.textContent = this.files.length > 0 ? this.files[0].name : "Nenhum arquivo escolhido";
  });
}

setupFileInput("doc", "file-doc-name");
setupFileInput("certificado", "file-cert-name");

