
const  acerto = new Audio();
acerto.src = "./audio/acerto.mp3"
const  errou = new Audio();
errou.src = "./audio/erro.mp3"
const ganhou = new Audio();
ganhou.src = "./audio/ganhou.mp3"
const perdeu = new Audio();
perdeu.src = "./audio/perdeu.mp3"



var palavras;
var numImagem = 2
var contador;
var array;
var itemSorteado;
var digitadas = []
var letrasQueForamClicadas = []

function zerarCampos(){
    numImagem = 2
    contador = 0
    digitadas = []

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

    for(letra of letrasQueForamClicadas){
        document.getElementById(`${letra}`).style.background = "#6495ed"
    }

    zerarCampos()

    const numero = Math.floor(Math.random()*palavras.length);
    const palavraSelecionada = palavras[numero];
    itemSorteado = palavraSelecionada;

    array = palavraSelecionada.split("")
    console.log(array)

    var sorteada = document.querySelector("[data-letras]");
    sorteada.innerHTML = (``)
    for(let i = 0;i < array.length; i++){
        
        sorteada.innerHTML += (`<div id="${i}">_</div>`)
    }
}

async function buscarLista(){
    
    const lista = await fetch("https://darlanaguiar.github.io/forca/animais.txt");
    const listaFormatada = await lista.json();
    palavras = listaFormatada

    iniciar()
}

function confereGanhou(numero){
    if(numero >= array.length){
        
        ganhou.play()
        let jogadorGanhou = document.querySelector("[data-ganhou]")
        jogadorGanhou.style.display = "block"
    
    }
}

function conferePerdeu(numero){
    if(numero == 8){

        perdeu.play()
        const jogadorPerdeu = document.querySelector("[data-perdeu]")
        jogadorPerdeu.style.display = "block"

        const resposta = document.querySelector("[data-resposta]")
        resposta.innerText =  `${itemSorteado}`
        resposta.style.display = "block"
    
    } 

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

    let entrou = false

    for(let i = 0; i < array.length; i++){

        if(array[i] == letra){
            acerto.play()
            var troca = document.getElementById(`${i}`)            
            troca.innerText = `${letra}`
        
            entrou = true
            contador += 1
        }
    }
    
    if(!entrou){

        errou.play()
            
        let foto = document.querySelector("[data-foto]");

        foto.innerHTML = `<img src="img/fig${numImagem}.png" alt="">`

        numImagem++

        conferePerdeu(numImagem)
    }

    confereGanhou(contador)


}

buscarLista()





























/* const teste = async() => {
    
    const x = await fetch("https://darlanaguiar.github.io/genius/palavras.txt")
    
    p = await x.json()
    console.log(p[4])
}

teste() */