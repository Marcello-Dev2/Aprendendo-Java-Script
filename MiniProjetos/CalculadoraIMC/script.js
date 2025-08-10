
const btn = document.querySelector(".button")




function imc(){
    const nome = document.querySelector("#nome").value;
    const altura = document.querySelector("#altura").value;
    const peso = document.querySelector("#peso").value;
    const res = document.querySelector("#res");

    if (nome !== "" && altura !== "" && peso !== ""){
        alert("Valor vazio")
    }else{
        res.innerHTML = `Preencha os Valores` ;
    }

 
    
}

btn.addEventListener("click", imc)
