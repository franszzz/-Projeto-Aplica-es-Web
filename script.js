document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('loginButton');
    const email = document.getElementById('e-mail');
    const senha = document.getElementById('senha');

    loginButton.addEventListener('click', function () {
        if (email.value.trim() === '' || senha.value.trim() === '') {
            alert('Os campos de e-mail e senha não podem ficar vazios.');
        } else {
            window.location.href = 'login.html';  // Redireciona para a página login.html
        }
    });
    cadastrarButton.addEventListener('click', function () {
        window.location.href = 'cadastrar.html';  // Redireciona para a página cadastrar.html
    });
});



