const textoVermelho = document.getElementById('spantextoVermelho');
const textoVerde = document.getElementById('spantextoVerde');
const textoAzul = document.getElementById('spantextoAzul');
  
const botaoAlterarVermelho = document.getElementById('btAlterarVermelho');
const botaoAlterarVerde = document.getElementById('btAlterarVerde');
const botaoAlterarAzul= document.getElementById('btAlterarAzul');

btAlterarVermelho.addEventListener('click', () => {
    textoVermelho.style.color = 'red';
});

btAlterarVerde.addEventListener('click', () => {
    textoVerde.style.color = 'verde';
});

btAlterarAzul.addEventListener('click', () => {
    textoAzul.style.color = 'Azul';
});


