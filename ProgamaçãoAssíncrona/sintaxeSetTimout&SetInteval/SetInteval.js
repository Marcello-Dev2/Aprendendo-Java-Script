let c = 0; 

const intervalo = setInterval(() => {
    c++ 
    console.log("Contagem", c );

    if (c === 5){
        clearInterval(intervalo);
        console.log("Parou");
    }
});