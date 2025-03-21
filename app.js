// let titulo = document.querySelector('h1'); //Busca no HTML uma referência que contenha a tag H1;
// titulo.innerHTML = 'Game Do Gatobô'; //Insira no HTML;
// let subtitulo = document.querySelector('p'); //'querySelector' pega através da tag;
// subtitulo.innerHTML = 'Adivinhe qual é o número entre 1 e 10...'; 

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag); //Busca no HTML uma referência que contenha a tag H1;
    campo.innerHTML = texto; //Insira no HTML;
}
exibirTexto('h1','Jogo de Adivinhação')
exibirTexto('p','Escolha um número entre 1 e 100...')

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100) + 1
}
let numeroSecreto = gerarNumeroAleatorio()
console.log(numeroSecreto)

function verificarChute(){
    let chute = parseInt(document.querySelector('input').value);
    console.log(chute === numeroSecreto);
    
}
dsfgnsadklf