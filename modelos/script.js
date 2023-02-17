function carregar(){
    var ms = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
   var hora = data.getHours()
   
    ms.innerHTML = `Agora são ${hora} Horas.`
    if (hora >= 0 && hora <= 12){
        // Bom Dia!
        img.src = "imagens/manhã.png"
       document.body.style.background = '#d3bF9b'
    } else if ( hora >= 12 && hora <= 18){
        // Boa Tarde!
        img.src = "imagens/tarde.png"
        document.body.style.background = '#8C3A27'
    } else {
        // Boa Noite!
        img.src = "imagens/noite.png"
        document.body.style.background = '#022340'
        document.body.style.color = 'white'
    }  
}