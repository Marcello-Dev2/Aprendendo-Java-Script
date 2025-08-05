function cadastrar() {
  const nomes = [];
  let nome;

  while (true) {
    nome = prompt("Digite um nome (ou 'sair' para parar):");
    if (nome === null || nome.toLowerCase() === "sair") break;
    if (nome.trim() !== "") {
      nomes.push(nome.trim());
    }
  }

  const resultado = document.querySelector("#resultado");

  const nomesOrdenados = [...nomes].sort();
  const nomesComA = nomes.filter(n => n.toLowerCase().startsWith("a"));

  resultado.innerHTML = `
    <p><strong>Todos os nomes:</strong> ${nomes.join(", ")}</p>
    <p><strong>Total de nomes:</strong> ${nomes.length}</p>
    <p><strong>Em ordem alfabética:</strong> ${nomesOrdenados.join(", ")}</p>
    <p><strong>Nomes que começam com A:</strong> ${nomesComA.join(", ")}</p>
  `;
}
