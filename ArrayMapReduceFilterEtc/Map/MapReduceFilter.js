// map()

const produtos = [
    { id:1, nome : "Smartphone", preco: 3999.99, temDesconto: true, quantidade: 1 },
    { id:2, nome : "notebook", preco: 4500.00, temDesconto: false, quantidade: 3 },
    { id:3, nome : "fone", preco: 999.99, temDesconto: true, quantidade: 5 },
    { id:4, nome : "Console", preco: 2299.00, temDesconto: false, quantidade: 2 },
    { id:5, nome : "tablet", preco: 399.00, temDesconto: true, quantidade: 4 }
];

const novosProdutos = produtos.map(produto => {

    const novoPreco =  produto.temDesconto ? produto.preco * 0.9 : produto.preco

    return {
        id : produto.id,
        nome: produto.nome,
        preco: novoPreco.toLocaleString('pt-br', {style : 'currency', currency : 'BRL'}),
        quantidade : produto.quantidade
    }

});


const totVendas = produtos.reduce((acumulador, produto) =>{
    return acumulador + (produto.preco * produto.quantidade)
},0)

//console.log(totVendas.toLocaleString('pt-br', {style : 'currency', currency : "BRL"}))


