const buscarUsuario = (id, callback) => {
    
    setTimeout(() => {
        console.log("Olá, seja Bem Vindo");
        const user = {id : id, nome : "Marcello",
            w
        };
        callback(user)
    }, 2000);
};


buscarUsuario(1, (usuario) =>  {
    console.log("Usuário Encotrado", usuario)
});