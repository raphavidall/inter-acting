document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var emailInput = document.querySelector('input[type="email"]');
    var emailAddress = emailInput.value;
    console.log('E-mail cadastrado:', emailAddress);
    emailInput.value = ''; // Limpar o campo de e-mail após o envio
    alert('Obrigado por se inscrever! Você será notificado sobre o lançamento do produto.');
    // const interessados = 0;
    // interessados += 1;
});
