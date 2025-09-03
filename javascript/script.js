// Função para mostrar mensagem na interface
function mostrarMensagem(mensagem, tipo = 'info') {
    // Criar elemento de mensagem se não existir
    let mensagemElement = document.getElementById('mensagem-flutuante');
    
    if (!mensagemElement) {
        mensagemElement = document.createElement('div');
        mensagemElement.id = 'mensagem-flutuante';
        mensagemElement.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: bold;
            z-index: 1000;
            opacity: 0;
            transform: translateX(100px);
            transition: opacity 0.3s, transform 0.3s;
        `;
        document.body.appendChild(mensagemElement);
    }

    // Definir cor baseada no tipo
    const cores = {
        'info': '#7AA9FF',
        'success': '#28a745',
        'warning': '#ffc107',
        'error': '#dc3545'
    };

    mensagemElement.style.backgroundColor = cores[tipo] || cores.info;
    mensagemElement.textContent = mensagem;

    // Mostrar mensagem
    mensagemElement.style.opacity = '1';
    mensagemElement.style.transform = 'translateX(0)';

    // Esconder após 3 segundos
    setTimeout(() => {
        mensagemElement.style.opacity = '0';
        mensagemElement.style.transform = 'translateX(100px)';
    }, 3000);
}

function escolherOpcao(opcao) {
    if (opcao === "paciente") {
        window.location.href = "CadastroPaciente.html";
    } else if (opcao === "medico") {
        window.location.href =("CadastroMedico.html");
    } else if (opcao === "login") {
        window.location.href =("login.html");
    }
}

function escolherOpcaoCima(opcao) {
    const mensagens = {
        'inicio': "Você escolheu o botão de início",
        'conversa': "Abrindo área de conversa",
        'atividade': "Abrindo atividades",
        'info': "Abrindo informações"
    };
    
    mostrarMensagem(mensagens[opcao], 'info');
    
    // Adicionar classe selecionada e remover das outras
    const opcoes = document.querySelectorAll('.opcaoCima');
    opcoes.forEach(op => op.classList.remove('selecionado'));
    
    const opcaoAtual = document.querySelector(`.opcaoCima[onclick*="${opcao}"]`);
    if (opcaoAtual) {
        opcaoAtual.classList.add('selecionado');
    }
}
//////////////////////pedro//////////////////////
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


//atividade Javascript

// Função de redirecionamento
function irPara(pagina) {
  window.location.href = pagina;
}

//conversas javascript

function navigate(page) {
  window.location.href = page;
}


//info javascript

// Função para redirecionar entre páginas
function irPara(pagina) {
  window.location.href = pagina;
}

// Exemplo para o botão "Saiba Mais"
const botoes = document.querySelectorAll(".saiba-mais");
botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    alert("Mais informações em breve...");
  });
});


//inicio javascript

function navigate(page) {
  window.location.href = page;
}
