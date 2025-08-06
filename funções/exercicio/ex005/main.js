const capitalizar = (frase) => {
    return frase.split(' ').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
    .join(" ");
}
console.log(capitalizar("bom dia marcello "))