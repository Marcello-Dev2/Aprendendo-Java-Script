
const notas = [5.5, 7.0, 8.2, 3.4, 9.1, 6.0, 4.3, 10, 2.8];
 


console.log("Todas as notas:");
notas.forEach(nota => console.log(nota));

const aprovado = notas.filter(num => num >= 6.0);
console.log("Aprovados", aprovado);


const reprovados = notas.filter(num => num < 6.0)
console.log(reprovados.length)


const soma = notas.reduce((acc, nota) => acc + nota,0);
const media = soma / notas.length;
console.log("Média da Turma ", media.toFixed(2))


const novoArray = notas.map(nota => `Nota: ${nota}`);
console.log(novoArray)

const orderna = [...notas].sort((a, b) => a -b);
console.log("Notas ordenadas", orderna) 

const maior = Math.max(...notas);
const menor = Math.min(...notas);
console.log("Maior Nota:" , maior);
console.log("Menor Nota:" , menor);
