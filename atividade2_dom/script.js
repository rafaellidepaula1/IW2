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

const botaoModo= document.getElementById('btnModo');

botaoModo.addEventListener('click' , () => {
 if (document.body.style.background === 'black') { 
     document.body.style.background = '';
     document.body.style.color ='';

    }    else {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    }
});

const textoEstilos = document.querySelectorAll('.spanTextoEstilo');
const botaoMudaBold = document.getElementById('btnMudarBold');
const botaoMudaritalico = document.getElementById('btnMudaritalico');

botaoMudarBold.addEventListener('dblclick' , () => {
    textoEstilos.forEach(texto => {
        texto.style.fontWeigh = 'bold';
    });
});

botaoMudaritalico.addEventListener('dblclick' , () => {
    textoEstilos.forEach(texto => {
        texto.style.fontStyle = 'italic';
    });
});

const numero = document.getElementById('inputNumero');
const resultado = document.getElementById('spanResultado');

numero.addEventListener('input', () => {
    resultado.textContent = numero.value * 2;
});

