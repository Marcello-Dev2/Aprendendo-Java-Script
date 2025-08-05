function clique() {
    const n1 = Number(prompt("Digite o Primeiro valor"));
    const n2 = Number(prompt("Digite outro valor"));
    const res = document.querySelector("#res");

    if(isNaN(n1) || isNaN(n2) || n1 === 0 || n2 ===0){
        alert('Valor inválido');

    }else{
        if(n1 > n2){
        res.textContent = `${n1} é o maior valor`;

        }else if(n2 > n1){
        res.textContent = ` ${n2} é o maior valor `;

        }else{
        res.textContent = `Os valores são iguais`;
    }
}
}  