function clique(){
    const numI = document.querySelector("#numI").value;
    const numF = document.querySelector("#numF").value;
    const h2 = document.querySelector("h2");
    const res = document.querySelector("#res");
    const caixa = document.querySelector(".caixa");
    caixa.style.backgroundColor = "yellow";

    h2.innerHTML = `Contando de ${numI} até ${numF}`;
      res.innerHTML = "";
    if(numF > numI){
        for(let i = numI;i <= numF;i ++){
        res.innerHTML += `${i} => `;
        }
    }else{
        for(let i = numF;i >= numI;i --){
        res.innerHTML -= `${i} => `;
    }
}
}