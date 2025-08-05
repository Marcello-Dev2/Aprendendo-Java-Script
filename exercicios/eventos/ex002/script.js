const red = document.querySelector("#red");
const azul = document.querySelector("#azul");
const preto = document.querySelector("#preto");
const div = document.querySelector(".quadradro");

red.addEventListener("click", () => {
    div.style.backgroundColor = "red"
}
);
azul.addEventListener("click", () => {
    div.style.backgroundColor = "blue"
}
);
preto.addEventListener("click", () => {
    div.style.backgroundColor = "black"
}
);
div.style.transition = "all 0.5s linear"