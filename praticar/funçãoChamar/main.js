const pessoas = [
    {
        nome: "Maria",
        id: 1,
        age: 22,
        chama: function (num) {
            console.log(`Usuário ${num} - Meu nome é ${this.nome} e meu id é ${this.id}`);
        }
    },
    {
        nome: "Marcello",
        id: 2,
        age: 30,
        chama: function (num) {
            console.log(`Usuário ${num} - Meu nome é ${this.nome} e meu id é ${this.id}`);
        }
    },
    {
        nome: "Ale",
        id: 3,
        age: 24,
        chama: function (num) {
            console.log(`Usuário ${num} - Meu nome é ${this.nome} e meu id é ${this.id}`);
        }
    },
    {
        nome: "Laysa",
        id: 4,
        age: 26,
        chama: function (num) {
            console.log(`Usuário ${num} - Meu nome é ${this.nome} e meu id é ${this.id}`);
        }
    }
];

// Chamando o método da Maria:
pessoas[0].chama(1);

// Chamando o método do Marcello:
pessoas[1].chama(2);
