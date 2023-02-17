
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        alert('Algo está errado.')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                 //criança
                 img.setAttribute('src', 'BebeM.png')
            } else if (idade < 21 ) {
                // adolecente
                img.setAttribute('src', 'adolecenteM.png')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'Adulto.png')
            } else {
                // velho
                img.setAttribute('src', 'velho.png')
            }
      
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'BebeF.png')
           } else if (idade < 21 ) {
               // adolecente
               img.setAttribute('src', 'adolecenteF.png')
           } else if (idade < 50) {
               //adulto
               img.setAttribute('src', 'Adulta.png')
           } else {
               // velho
               img.setAttribute('src', 'Velha.png')
           }

        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
    }
}
