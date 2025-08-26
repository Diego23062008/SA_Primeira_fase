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
    const mensagens = {
        "paciente": "Você escolheu criar conta como Paciente!",
        "medico": "Você escolheu criar conta como Médico!",
        "login": "Você escolheu entrar em uma conta existente!"
    };
    
    mostrarMensagem(mensagens[opcao], 'success');
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

