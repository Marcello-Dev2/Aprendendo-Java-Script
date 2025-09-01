const calculadora = {
    nome: "MinhaCalk",
    resultado: 0,
    
    somar: function(numero) {
        this.resultado += numero;
        console.log(`${this.nome}: ${this.resultado}`);
        return this;
    },
    
    multiplicar: function(numero) {
        this.resultado *= numero;
        console.log(`${this.nome}: ${this.resultado}`);
        return this;
    }
};

// Usando normalmente
calculadora.somar(5).multiplicar(2); // "MinhaCalk: 5" depois "MinhaCalk: 10"

// Salvando métodos em variáveis (sem bind - não funciona)
const somar = calculadora.somar;
somar(3); // Erro! 'this' não aponta para calculadora

// Com bind - funciona!
const somarFixo = calculadora.somar.bind(calculadora);
somarFixo(3); // "MinhaCalk: 13" ✅