/*function somar(a, b) {
    const resultado = a + b

    return resultado
}
console.log(somar(3, 6))*/


/*function ehPar(num) {
    if (num % 2 === 0) {
        return true
    } else {
        return false
    };
}
console.log(ehPar(6));*/


/*function contletras (palavra){
   const letras =  palavra.split("").length
    return letras
}
console.log(contletras("Marcello"))*/

function tabuada(numero) {
    let c = 1
    while(c <= 10){
    const res =  numero * c 
     console.log(`${numero} X ${c} = ${res}`)
       c++
    }
}
tabuada(5)

