function clique(){
    const num = Number(prompt("Digite um número"));
    const res = document.querySelector("#res");

    if ((isNaN(num)) || num === 0  ){
        alert("digite um valor válido!")
    }else if(num % 2 == 0){
        res.innerHTML = `O número ${num} que foi digitado é <strong>PAR!</strong>`
    }else{
        res.innerHTML = `O número ${num} que foi digitado é <strong> ÍMPAR!</strong>`
    }
}