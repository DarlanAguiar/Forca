
const  acerto = new Audio(src = "./audio/acerto.mp3");
const  errou = new Audio(src = "./audio/erro.mp3");
const ganhou = new Audio(src = "./audio/ganhou.mp3");
const perdeu = new Audio(src = "./audio/perdeu.mp3");

var palavras;
var numImagem = 2
var contador;
var arrayDeCaracteres;
var itemSorteado;
var digitadas = []
var letrasQueForamClicadas = []

function reorganizarCampos(){
    numImagem = 2
    contador = 0
    digitadas = []

    for(letra of letrasQueForamClicadas){
        document.getElementById(`${letra}`).style.background = "#6495ed"
    }

    const resposta = document.querySelector("[data-resposta]")
    resposta.style.display = "none"

    let foto = document.querySelector("[data-foto]");
    foto.innerHTML = `<img src="img/fig1.png" alt="">`

    let perdeu = document.querySelector("[data-perdeu]")
    perdeu.style.display = "none"

    let ganhou = document.querySelector("[data-ganhou]")
    ganhou.style.display = "none"
}

function iniciar(){

    reorganizarCampos()

    const numero = Math.floor(Math.random()*palavras.length);
    const palavraSelecionada = palavras[numero];
    itemSorteado = palavraSelecionada;

    arrayDeCaracteres = palavraSelecionada.split("")
    
    var sorteada = document.querySelector("[data-letras]");
    sorteada.innerHTML = ``

    for(let i = 0;i < arrayDeCaracteres.length; i++){
        
        sorteada.innerHTML += (`<div id="${i}">_</div>`)
    }
}

async function buscarLista(){
    
    const lista = await fetch("https://darlanaguiar.github.io/forca/animais.txt");
    const listaFormatada = await lista.json();
    palavras = listaFormatada
}

function confereGanhou(numero){
    if(numero >= arrayDeCaracteres.length){
        
        ganhou.play()
        let jogadorGanhou = document.querySelector("[data-ganhou]")
        jogadorGanhou.style.display = "block"
    
    }
}

function conferePerdeu(numero){
    if(numero < 8){
        return;
    }

    perdeu.play()
    const jogadorPerdeu = document.querySelector("[data-perdeu]")
    jogadorPerdeu.style.display = "block"

    const resposta = document.querySelector("[data-resposta]")
    resposta.innerText =  `${itemSorteado}`
    resposta.style.display = "block"
}


function mudaCorDeFundo(letra){

    letrasQueForamClicadas.push(letra)
    document.getElementById(`${letra}`).style.background = "transparent"
}


function confereLetra(letra){
    
    if(digitadas.includes(letra)){
        return
    }
    digitadas.push(letra)

    mudaCorDeFundo(letra)

    let encontrouNovaLetra = false

    for(let i = 0; i < arrayDeCaracteres.length; i++){

        if(arrayDeCaracteres[i] == letra){
            acerto.play()
            var troca = document.getElementById(`${i}`)            
            troca.innerText = `${letra}`
        
            encontrouNovaLetra = true
            contador += 1
        }
    }
    
    if(!encontrouNovaLetra){

        errou.play()
            
        let foto = document.querySelector("[data-foto]");

        foto.innerHTML = `<img src="img/fig${numImagem}.png" alt="">`

        numImagem++

        conferePerdeu(numImagem)
    }

    confereGanhou(contador)


}

async function main() {
    await buscarLista();
    iniciar();
}


main();



























/* const teste = async() => {
    
    const x = await fetch("https://darlanaguiar.github.io/genius/palavras.txt")
    
    p = await x.json()
    console.log(p[4])
}

teste() */