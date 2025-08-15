const buscarUssuario = (id, callback) => {
    setTimeout(() => {
        console.log("Bem vindo")
       const user = ({id : id, nome :"maria"})
        const user = ({ id: id, nome: "maria" })
        callback(user)
    }, 2000)
}

buscarUssuario(1, (usuario) => {
    console.log("usuário encontrado:", usuario);
});