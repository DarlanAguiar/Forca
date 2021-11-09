

const palavras = ["JOGADOR", "PESSOA", "MOTOCICLETA", "RESPOSTA"]


var array;
function iniciar(){
    const numero = Math.floor(Math.random()*palavras.length);
    const palavraSelecionada = palavras[numero];

    array = palavraSelecionada.split("")
    console.log(array)

    var sorteada = document.querySelector("[data-letras]");
 
    for(let i = 0;i < array.length; i++){
        
        sorteada.innerHTML += (`<div id="${i}">_</div>`)
        console.log(sorteada)

    }
}

var numImagem = 2

function confereLetra(letra){

    let entrou = false

    for(let i = 0; i < array.length; i++){
        
        

        if(array[i] == letra){
            var troca = document.getElementById(`${i}`)
            
            troca.innerText = `${letra}`
            console.log(i)
            entrou = true
        }    
    }
    
    if(!entrou){
            
        let foto = document.querySelector("[data-foto]");

        foto.innerHTML = `<img src="img/fig${numImagem}.png" alt="">`

        numImagem++
                

    }

  

    /* let teste = palavraSelecionada.search("A")

    console.log(teste)
 */
    
}
























































/* const teste = async() => {
    
    const x = await fetch("https://darlanaguiar.github.io/genius/palavras.txt")
    
    p = await x.json()
    console.log(p[4])
}

teste() */