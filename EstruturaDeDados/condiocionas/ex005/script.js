function clique() {

const resDia = document.querySelector(".dia");
const resMes = document.querySelector(".mes");
const resAno = document.querySelector(".ano");
const resDiaSemana = document.querySelector(".dia-semana");
const resHora = document.querySelector(".hora");
const resMinuto = document.querySelector(".minuto");
const resSegundo = document.querySelector(".segundo");



const dias = [ "Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

const data = new Date();
const dia = data.getDate();
const mes = data.getMonth() + 1 ;
const ano = data.getFullYear();
const diaSemana = data.getDay();
const hr = data.getHours();
const min= data.getMinutes();
const seg = data.getSeconds();

resDia.textContent = `Dia: ${dia}`;
resMes.textContent = `Mês: ${mes}`;
resAno.textContent = `Ano: ${ano}`;
resDiaSemana.textContent = `Dia da semana: ${dias[diaSemana]}`;
resHora.textContent = `Hora: ${hr}`;
resMinuto.textContent = `Minuto: ${min}`;
resSegundo.textContent = `Segundo: ${seg}`;


}