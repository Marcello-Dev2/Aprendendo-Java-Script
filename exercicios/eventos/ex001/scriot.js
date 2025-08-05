const caixa = document.querySelector(".caixa");
const titulo = document.querySelector("h1");
const pa = document.querySelector("p");
const texto = document.querySelector("#texto");
const res = document.querySelector(".res")

texto.addEventListener("input", () => {
    res.textContent = `Digitando : ` + (texto).value
    res.style.fontSize  = "50px"
});

caixa.addEventListener("mouseover", function () {
    caixa.style.backgroundColor = "#000000"
    caixa.style.transition = " 0.3s "
});

caixa.addEventListener("mouseout", () => {
    caixa.style.backgroundColor = "blueviolet"
  
})

caixa.addEventListener("click", function(){
    titulo.textContent = `ALe viado!`
    pa.textContent = `sem duvida`
    
})

