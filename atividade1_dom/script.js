const texto = document.getElementById('spanTexto');
const botaoAlterartexto = document.getElementById('btnAlterartexto');

botaoAlterartexto.addEventListener('click', () => {
    texto.textContent = 'novo texto';
});