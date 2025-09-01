/*

var nome = "João"; // Variável global

function cumprimentar() {
    console.log(nome); // Pode acessar a variável global
}

*/
/*

function exemplo() {
    var idade = 25; // Só existe dentro desta função
    console.log(idade); // ✅ Funciona
}

console.log(idade); // ❌ Erro! 'idade' não existe aqui

*/

/* //Exemplo básico:
if (true) {
    let cidade = "São Paulo"; // Só existe dentro deste bloco
    const pais = "Brasil";
}

console.log(cidade); // ❌ Erro! Não existe fora do bloco
*/
/*
function criarContador() {
    let count = 0; // Variável no escopo da função pai
    
    return function() {
        count++; // A função filha "lembra" da variável count
        return count;
    };
}

const contador = criarContador();
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3
*/

function exemploComLoop() {
    for (let i = 1; i <= 3; i++) {
        setTimeout(function() {
            console.log(i); // 1, 2, 3 (cada closure lembra seu próprio 'i')
        }, i * 1000);
    }
}

exemploComLoop();