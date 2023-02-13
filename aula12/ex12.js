var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são extamente ${hora} Horas.`)
if (hora <= 5){
    console.log('Bom madrugada!')
} else if ( hora <= 12){
    console.log('Bom dia!')
} else if ( hora <= 18 || hora >= 12){
    console.log('Boa tarde!')
} else if( hora <= 24){
    console.log("Boa noite!")
}
 