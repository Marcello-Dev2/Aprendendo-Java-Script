function clique(){
    const h2 = document.querySelector(".titulo");
    const resultado = document.querySelector(".res");

    h2.textContent = `Contando de 1 até 10`; 

    resultado.innerHTML = ''
    for( let i = 10 ;i >= 1; i--){
        resultado.innerHTML+=  `${i}=>  `;
   
    }
     
}
