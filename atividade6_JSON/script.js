const informacoesUsuario ='{"nome": "Rafaelli","idade": "16", "situacao": true}';

const usuario = JSON.parse (informacoesusuario);

const elementoNome = document.getElementById('nome-usuario');
const elementoIdade= document.getElementById('idade-usuario');
const elementoSituacao= document.getElementById('situacao-usuario');

const botaoCarregar = document.getElementById('btnCarregar');

botaoCarregar.addEventListener('click' , () => {
      elementoNome.textContent = usuario.nome;
      elementoIdade.textContent = usuario.idade + 'anos';
      elementoSituacao.textContent = usuario.situacao ? 'Online' : 'Offline';
});


