function clique(){
    const h2 = document.querySelector(".titulo");
    const resultado = document.querySelector(".res");


    for( let i = 1 ;i <= 10; i++){
        h2.textContent = `Contando de 1 até 10`; 
        resultado.innerHTML+= i + `=>  `;
    }
}