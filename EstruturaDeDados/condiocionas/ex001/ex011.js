
function calcular() {

    const nome = prompt("Digite seu nome");
    const num1 = Number(prompt("Primeira nota"));
    const num2 = Number(prompt("Segunda nota"));

    const media = (num1 + num2) / 2;

    const ca = document.getElementById("cal");
    const notas = document.getElementById("notas");
    const m = document.getElementById("media");
    const res = document.getElementById("res");



    ca.innerHTML = `Calculando a Média do ${nome}<br><br>`;

    notas.innerHTML = `As notas obtidas foram ${num1} e ${num2}<br>`;

    m.innerHTML = `A Média do aluno foi ${media.toFixed(1)} <br>`;
    if (media >= 6) {
        res.innerHTML = 'A mensagem que temos: Meus Parabens!'
    } else {
        res.innerHTML = "A mensagem que temos: Estude mais!"
    }
}
