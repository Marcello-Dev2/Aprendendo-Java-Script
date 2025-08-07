function adicionar() {
    let valorInput = document.querySelector("input").value;

    let novali = document.createElement("li");

    novali.innerHTML = valorInput + '<span onclick="del(this)">❌</span>';
    document.querySelector("ul").appendChild(novali);
  
    document.querySelector("input").value = ""
}

function del(novali) {
    novali.parentElement.remove()

}