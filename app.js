let titulo = document.querySelector('h1');
// a variável titulo vai buscar no html com a tag query.Selector o h1.

titulo.innerHTML = 'Jogo do número secreto';
// .innerHTML é uma tag para mandar do java para o html algo assim; olhar no index como vai ficando.

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';



//Tudo que fiz até agora pode ser compilado para que o código fique mais curto; ou seja;




let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;



function exibirTextoNaTela(tag, texto)  {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Male', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}


function verificarChute()    {
    let chute = document.querySelector('input').value;
    if(chute==numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!!');
        let palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!.`;
        exibirTextoNaTela('p',mensagemTentativas);
        //se eu acertar quero clicar no botão de reiniciar o jogo, mas como tem 2 botões esse eu vou selecionar pelo id;
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if(chute<numeroSecreto){
        exibirTextoNaTela('h1', 'Você errou!');
        exibirTextoNaTela('p','O seu chute é menor que o número secreto');
    } else{
        exibirTextoNaTela('h1','Você errou!');
        exibirTextoNaTela('p','Seu chute é maior que o número secreto.');
    }
    tentativas++
    limparCampo();
}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() *numeroLimite +1);
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

   if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return gerarNumeroAleatorio();
   } else {
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

//Tenho que cirar uma condição de só liberar o botão de novo jogo quando o número for ativado, para isso
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}








