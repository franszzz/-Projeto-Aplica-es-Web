document.addEventListener('DOMContentLoaded', function () {
    const cadastrarButton = document.getElementById('cadastrarButton');
    const nome = document.getElementById('nome');
    const email = document.getElementById('e-mail');
    const senha = document.getElementById('senha');

    cadastrarButton.addEventListener('click', function () {
        if (nome.value === '' ||email.value === '' || senha.value === '') {
            alert('Os campos não podem ficar vazios.');
        } else {
            window.location.href = 'inicial.html';
        }
    });

});
