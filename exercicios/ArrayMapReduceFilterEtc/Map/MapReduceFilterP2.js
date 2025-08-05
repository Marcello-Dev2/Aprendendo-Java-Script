const produtos = [
    { id: 1, nome: "Smartphone", preco: 3999.99, temDesconto: true, quantidade: 1 },
    { id: 2, nome: "notebook", preco: 4500.00, temDesconto: false, quantidade: 3 },
    { id: 3, nome: "fone", preco: 999.99, temDesconto: true, quantidade: 5 },
    { id: 4, nome: "Console", preco: 2299.00, temDesconto: false, quantidade: 2 },
    { id: 5, nome: "tablet", preco: 399.00, temDesconto: true, quantidade: 4 }
];


const faturamentoTotal = produtos.map(produto => {
    return { ...produto, quantidade: produto.quantidade + 10 }
}).filter((produto) => produto.temDesconto).reduce((acumular, produto) => acumular + (produto.preco * produto.quantidade),0
)
console.log(faturamentoTotal.toLocaleString('pt-br', {style : "currency", currency : "BRL"}))

