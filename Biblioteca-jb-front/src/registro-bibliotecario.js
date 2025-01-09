document.addEventListener('DOMContentLoaded', function () {
    const registroForm = document.getElementById('registroForm');

    registroForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;
        const masp = document.getElementById('masp').value;

        const bibliotecario = { nome, email, senha, masp };

        try {
            const response = await fetch('http://localhost:3750/registrar-bibliotecario', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bibliotecario),
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registro realizado com sucesso!');
                window.location.href = './bibliotecario-login.html';
            } else {
                alert('Erro ao registrar: ' + data.erro);
            }
        } catch (error) {
            console.error('Erro ao registrar:', error);
            alert('Erro ao registrar: ' + error.message);
        }
    });
});
