let usuario = {
    nome: "Doutora Maria Luiza Fonseca",
    email: "Maria.Luiza@gmail.com",
    senha: "123456",
    telefone: "(+55)",
    cpf: "034.120.596.41",
    especializacao: "Trabalha com aspectos da comunicação oral e escrita, incluindo distúrbios de fala e linguagem em crianças e adultos"
};

// Preenche os campos ao carregar
window.onload = function() {
    if(localStorage.getItem("usuario")) {
        usuario = JSON.parse(localStorage.getItem("usuario"));
    }
    document.getElementById("nome").value = usuario.nome;
    document.getElementById("email").value = usuario.email;
    document.getElementById("senha").value = usuario.senha;
    document.getElementById("telefone").value = usuario.telefone;
    document.getElementById("cpf").value = usuario.cpf;
    document.getElementById("especializacao").value = usuario.especializacao;
}

// Salvar alterações
function salvarPerfil() {
    usuario.nome = document.getElementById("nome").value;
    usuario.email = document.getElementById("email").value;
    usuario.senha = document.getElementById("senha").value;
    usuario.telefone = document.getElementById("telefone").value;
    usuario.cpf = document.getElementById("cpf").value;
    usuario.especializacao = document.getElementById("especializacao").value;

    localStorage.setItem("usuario", JSON.stringify(usuario));
    alert("Perfil salvo com sucesso!");
}

// Redefinir senha
function redefinirSenha() {
    let nova = prompt("Digite a nova senha:");
    if(nova && nova.length >= 4) {
        document.getElementById("senha").value = nova;
        usuario.senha = nova;
        localStorage.setItem("usuario", JSON.stringify(usuario));
        alert("Senha alterada!");
    } else {
        alert("Senha inválida (mínimo 4 caracteres).");
    }
}

// Sair
function sair() {
    localStorage.removeItem("usuario");
    alert("Você saiu!");
    window.location.href = "login.html"; // redireciona
}

// Alterar foto de perfil
function alterarFoto() {
    alert("Função de upload de foto ainda não implementada.");
}