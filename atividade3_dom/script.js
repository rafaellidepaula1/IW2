// botão pra calculos
const numero1 = document.getElementById('inputNumero1');
const numero2 = document.getElementById('inputNumero2');
const botaocalcular = document.getElementById('btnCalculos');
const textoSoma = document.getElementById('pSoma');
const textoSubtracao = document.getElementById('pSubtracao');
const  textoMultiplicaçao = document.getElementById('pMultiplicaçao');
const  textoDivisao = document.getElementById('pDivisao');
const  textoResto = document.getElementById('pResto');
const  textoPotencia = document.getElementById('pPotencia');

botaocalcular.addEventListener('click' , () => {
    if (numero1.value != '' && numero2.value != ''){
        const soma= Number(numero1.value) + Number(numero2.value);
        const Subtracao= Number(numero1.value) + Number(numero2.value);
        const Multiplicaçao= Number(numero1.value) + Number(numero2.value);
        const Divisao= Number(numero1.value) + Number(numero2.value);
        const Resto= Number(numero1.value) + Number(numero2.value);
        const Potencia= Number(numero1.value) + Number(numero2.value);

        textoSoma.innerHTML = numero1.value + ' + ' + numero2.value + '=' + Soma;
        textoSoma.innerHTML = numero1.value + ' + ' + numero2.value + '=' + Subtracao;
        textoMultiplicaçao.innerHTML = numero1.value + ' + ' + numero2.value + '=' + Multiplicaçao;
        textoDivisao.innerHTML = numero1.value + ' + ' + numero2.value + '=' + Divisao;
        textoResto.innerHTML = numero1.value + ' + ' + numero2.value + '=' + Resto;
        textoPotencia.innerHTML = numero1.value + ' + ' + numero2.value + '=' + Potencia;
    }
})

