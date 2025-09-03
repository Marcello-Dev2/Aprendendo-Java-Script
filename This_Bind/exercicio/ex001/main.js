/*
const pessoa = {
    nome : "maria",
    falar: function () {
        console.log(`Oi, eu sou ${this.nome}`)
    }
};

pessoa.falar()

*/

/*
const calculadora = {
    resultado : 0,
    somar: function (num){
        this.resultado += 5 + num
        console.log(this.resultado)
    }
}
calculadora.somar(3)
calculadora.somar(2)

*/
/*
const gato = {
    nome : "Miau",
    miu: function () {
        console.log(this.nome +  " Fez miau !")
    }
};

const fuion =  gato.miu.bind(gato)
gato.miu()
*/




const contantador = {
    valor: 0,
    incrementar: function () {
        this.valor++
        console.log("contador" + this.valor)
    }, 
    configurarBotao: function () {
        const butao = document.querySelector("button");
        butao.addEventListener("click", this.incrementar.bind(this))
    }

};
contantador.configurarBotao()

/*
const contador = {
    valor: 0,
    incrementar: function () {
        this.valor++;
        console.log("Contador: " + this.valor);
    }, configurarBotao: function () {
        const botao = document.getElementById("meuBotao"); // Complete a linha abaixo usando bind: botao.onclick = ????.????.????(?????); } }; // Testando: contador.configurarBotao();
*/