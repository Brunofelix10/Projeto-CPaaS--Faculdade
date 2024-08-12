document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.form-login');
    var errorLoginMessageElement = document.getElementById('errorLoginMessage');
    var lengthErrorElement = document.getElementById('lengthError');

    var loginnameInput = document.getElementById('loginname');
    var loginsenhaInput = document.getElementById('loginsenha');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar o envio do formulário por padrão

        var loginname = loginnameInput.value;
        var loginsenha = loginsenhaInput.value;

        // Limpar mensagens de erro ao tentar enviar novamente
        errorLoginMessageElement.innerHTML = '';
        lengthErrorElement.innerHTML = '';

        // Verificar o comprimento do campo de login
        var loginLength = loginname.length;

        // Exibir mensagem de comprimento mínimo e máximo
        if (loginLength !== 6) {
            lengthErrorElement.innerHTML = 'O login deve ter exatamente 6 caracteres.';
        }

        // Verificar se o usuário existe no localStorage
        var userData = localStorage.getItem(loginname);

        if (userData) {
            userData = JSON.parse(userData);

            // Verificar se a senha está correta
            if (userData.password === loginsenha) {
                // Se a senha estiver correta, redirecione para a página inicial
                window.location.href = '../Home/Home.html';
            } else {
                // Exibir mensagem de erro abaixo do botão de entrar
                errorLoginMessageElement.innerHTML = 'Senha incorreta. Tente novamente.';
            }
        } else {
            // Exibir mensagem de erro abaixo do botão de entrar
            errorLoginMessageElement.innerHTML = 'Usuário não encontrado. Cadastre-se antes de fazer o login.';
        }
    });
});