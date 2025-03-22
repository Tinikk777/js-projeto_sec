// let titulo = document.querySelector('h1'); //Busca no HTML uma referência que contenha a tag H1;
// titulo.innerHTML = 'Game Do Gatobô'; //Insira no HTML;
// let subtitulo = document.querySelector('p'); //'querySelector' pega através da tag;
// subtitulo.innerHTML = 'Adivinhe qual é o número entre 1 e 10...';

function exibirTexto(tag, texto) {
  let campo = document.querySelector(tag); //Busca no HTML uma referência que contenha a tag H1;
  campo.innerHTML = texto; //Insira no HTML;
}
exibirTexto("h1", "Jogo de Adivinhação");
exibirTexto("p", "Escolha um número entre 1 e 10...");

function gerarNumeroAleatorio() {
  return parseInt(Math.random() * 10) + 1;
}
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);

let tentativas = 3;

function verificarChute() {
  let chute = parseInt(document.querySelector("input").value);
  let palavraSecreta = tentativas === 1 ? "tentativa" : "tentativas";
  if (chute === numeroSecreto) {
    exibirTexto("h1", "Parabéns, você acertou!");
    return;
  }
  if (tentativas > 1) {
    tentativas = tentativas - 1;
    if (chute > numeroSecreto) {
      exibirTexto(
        "p",
        `Errou, o número secreto é menor. Você ainda tem ${tentativas} ${palavraSecreta}.`
      );
    } else {
      exibirTexto(
        "p",
        `Errou, o número secreto é maior. Você ainda tem ${tentativas} ${palavraSecreta}.`
      );
    }
  } else {
    exibirTexto("h1", `Você errou, fim das ${palavraSecreta}!`);
    exibirTexto("p", `Perdeu`);
  }
}
