//console.log('Intro a javaScript');

////tipos de datos
/// var , led , const


var a="afrt";


let mano1=prompt('Jugador 1 :Escoje una opcion');
let mano2=prompt('Jugador 2: Escoje una opcion');
console.log('mano 1:'+mano1)
console.log('mano 2:'+mano2)
if (mano1==mano2) {
    console.log('empate')
} else if (mano1=="piedra" && mano2=="tijeras"||mano1=="tijeras" && mano2=="papel" ||mano1=="papel" && mano2=="piedra") {
    console.log('Gano mano 1')
} else {
    console.log('Gano mano 2')
}



