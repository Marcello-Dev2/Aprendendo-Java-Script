// sintaxe
/* function primeiraFuncao() {

    return new Promise((resolve) => {
        setTimeout (() => {
        console.log("Esperou isso aqui !")
            resolve()
        }, 1000)
    })

}
async function segundafuncao() {
    console.log("Iniciou")

    await primeiraFuncao()

    console.log("terminou")
}

segundafuncao()
*/


//Prática 

function getUser(id) {
    return fetch(`https://reqres.in/api/users?id=${id}`)

    .then((data) => data.json())
    .catch((err) => console.log(err))
};

async function showUserName(id) {

    try{
    const user = await getUser(id)
    console.log("")
    console.log(`O nome do usuário é:  ${user.data.first_name}`)
    }catch(err){

    }
}

showUserName(3)