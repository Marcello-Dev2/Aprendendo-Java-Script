/*
O que é o Bind?
O bind é como uma "cola" que fixa o valor do this em uma função. É como dizer: "não importa como você chame esta função, o this sempre será este objeto aqui!"
*/

const pessoa = {
    nome: "Ana",
    falar: function() {
        console.log(`${this.nome} está falando`);
    }
};

// Problema: perdemos o 'this'
const funcaoSolta = pessoa.falar;
funcaoSolta(); // "undefined está falando" ❌

// Solução: usar bind para "colar" o this
const funcaoColada = pessoa.falar.bind(pessoa);
funcaoColada(); // "Ana está falando" ✅

/*
function somar(a, b) {
    return a + b;
}

// Criando uma função que sempre soma 10 a qualquer número
const somar10 = somar.bind(null, 10);

console.log(somar10(5)); // 15 (10 + 5)
console.log(somar10(3)); // 13 (10 + 3)
*/