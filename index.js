

const palavras = ["JOGADOR", "PESSOA", "MOTOCICLETA", "RESPOSTA"]
var numImagem = 2
var contador;
var array;
function iniciar(){
    let perdeu = document.querySelector("[data-perdeu]")
    perdeu.style.display = "none"

    numImagem = 2
    contador = 0

    let foto = document.querySelector("[data-foto]");
    foto.innerHTML = `<img src="img/fig1.png" alt="">`

    let ganhou = document.querySelector("[data-ganhou]")
    ganhou.style.display = "none"

    const numero = Math.floor(Math.random()*palavras.length);
    const palavraSelecionada = palavras[numero];

    array = palavraSelecionada.split("")
    console.log(array)

    var sorteada = document.querySelector("[data-letras]");
    sorteada.innerHTML = (``)
    for(let i = 0;i < array.length; i++){
        
        sorteada.innerHTML += (`<div id="${i}">_</div>`)
        console.log(sorteada)

    }
}

function confereGanhou(numero){
    if(numero == array.length){
        let ganhou = document.querySelector("[data-ganhou]")
        ganhou.style.display = "block"
    
    }
}

function conferePerdeu(numero){
    if(numero == 8){
        let perdeu = document.querySelector("[data-perdeu]")
        perdeu.style.display = "block"
    
    } 

}

function confereLetra(letra){

    let entrou = false

    for(let i = 0; i < array.length; i++){

        if(array[i] == letra){
            var troca = document.getElementById(`${i}`)            
            troca.innerText = `${letra}`
            console.log(i)
            entrou = true
            contador += 1
        }
    }
    
    if(!entrou){
            
        let foto = document.querySelector("[data-foto]");

        foto.innerHTML = `<img src="img/fig${numImagem}.png" alt="">`

        numImagem++

        conferePerdeu(numImagem)
    }

    confereGanhou(contador)


}

iniciar()























































/* const teste = async() => {
    
    const x = await fetch("https://darlanaguiar.github.io/genius/palavras.txt")
    
    p = await x.json()
    console.log(p[4])
}

teste() */