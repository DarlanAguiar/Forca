const x = "olá, Forca"

















const teste = async() => {
    
    const x = await fetch("https://darlanaguiar.github.io/genius/palavras.txt")
    
    p = await x.json()
    console.log(p[4])
}

teste()