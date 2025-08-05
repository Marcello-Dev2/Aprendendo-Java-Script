function clique(){
const numF = document.querySelector("input").value;
const h2 = document.querySelector("h2");
const res = document.querySelector("#res");
    h2.innerHTML = `Contando de 0 até ${numF}`;
for(let i = 1;i <= numF;i++){
    res.textContent += `${i} =>` 
    }
}