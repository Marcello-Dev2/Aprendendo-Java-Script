/*
const pessoa = {
    nome: "Maria",
    idade: 25,

    apresentar: function() {
        console.log(`Oi, eu sou ${this.nome} e tenho ${this.idade} anos`);
        // 'this' aqui se refere ao objeto 'pessoa'
    }
};

pessoa.apresentar(); // "Oi, eu sou Maria e tenho 25 anos"]
*/


const obj = {
    nome: "João",
    
    // Função normal - 'this' muda
    metodoNormal: function() {
        console.log(`Normal: ${this.nome}`);
    },
    
    // Arrow function - 'this' é fixo
    metodoArrow: () => {
        console.log(`Arrow: ${this.nome}`);
    }
};

obj.metodoNormal(); // "Normal: João" ✅
obj.metodoArrow();  // "Arrow: undefined" ❌


//Texto do exmplo acima 

//Arrow functions não têm seu próprio this - elas "herdam" o this de onde foram criadas!
