function clique(){
const titulo = document.querySelector(".h1");
const para = document.querySelector("p");

   titulo.classList.add("ho");

   titulo.classList.remove("ho")

   titulo.classList.add("red")

   titulo.style.transition = " all 0.5s linear"
   titulo.style.backgroundColor = " red"
   titulo.style.color = "#ffffff"
   para.classList.add("pe")

   para.classList.toggle("")
}
   