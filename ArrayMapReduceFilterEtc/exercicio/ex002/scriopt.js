function analisar() {
    const num = []
    let entrada;

    while(true){
        entrada= prompt("Digite um number (Ou digite 'fim' para parar)")
        if (entrada === null || entrada.toLowerCase() === "fim")break;


        const number = Number(entrada)
        if(!isNaN(number)){
            num.push(number)
        }
    }


    if (num.length === 0 ){
        document.querySelector("#resposta").innerHTML = `<p> Nenhum número digitado .</p>`
        return;

    }
    const soma = num.reduce((acc, n) => acc + n ,0 )
    const media = soma / num.length;
    const maior = Math.max(...num)
    const menor = Math.min(...num)
    const pares = num.filter( n => n %2 == 0);

    document.querySelector("#resposta").innerHTML = `
    <p><strong>Números digitados:</strong> ${numeros.join(", ")}</p>
    <p><strong>Quantidade:</strong> ${numeros.length}</p>
    <p><strong>Soma:</strong> ${soma}</p>
    <p><strong>Média:</strong> ${media.toFixed(2)}</p>
    <p><strong>Maior número:</strong> ${maior}</p>
    <p><strong>Menor número:</strong> ${menor}</p>
    <p><strong>Números pares:</strong> ${pares.join(", ")}</p>`
}
