function escolherOpcao(opcao) {
 if (opcao ===  'paciente') {
    window.location.href = 'cadastroPaciente.html';
 }
 else if (opcao === 'medico') {
    window.location.href = 'cadastroMedico.html';
 }
 else if (opcao === 'login') {
    window.location.href = 'login.html';
 }
}
