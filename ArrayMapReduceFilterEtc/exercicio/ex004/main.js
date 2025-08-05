const produtos = [
  { nome: "Camisa", preco: 49.9 },
  { nome: "Calça", preco: 89.9 },
  { nome: "Tênis", preco: 120.0 },
  { nome: "Meia", preco: 15.0 },
  { nome: "Boné", preco: 35.5 }
];
produtos.forEach(produto => {
    console.log(produto.nome);
});

const preco = produtos.map(pre => pre.preco )
console.log(preco)

const acima = [...produtos].filter(preco => preco.preco > 50)
console.log(acima)


const tot = produtos.reduce((sama, produto ) => sama + produto.preco, 0)
console.log(tot.toLocaleString('pt-br', {style : 'currency', currency : 'BRL'}))

const formatado = produtos.map(fot => `${fot.nome} - R$${fot.preco.toFixed(2)}`)
console.log(formatado)