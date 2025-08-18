/*
const myPromise = new Promise((resolve, reject) => {
    const nome = "Matheus"

    if(nome === "Matheus"){

    }else{
        reject("O usuário Mateus não foi encotrado !")
    }

})
myPromise.then((data) => {
    console.log(data);
    
})
*/


//Encadeamento de then's
/*
const myPromise2 = new Promise((resolve, reject) => {
    const nome = "Matheus"

    if(nome === "Matheus"){
      
    }else{
        reject("O usuário Mateus não foi encotrado !")
    }

})
myPromise2.then((data) => {
    return data.toLowercase()
})
.then((stringModeficada) => {
    console.log(stringModeficada)
}) 
*/

//retorno do catch
/*
const myPromise3 = new Promise((resolve, reject) => {
    const nome = "Matheus"

    if(nome === "Matheus"){
        resolve("Usuário Matheus encontrado !")
    }else{
        reject("O usuário Mateus não foi encotrado !")
    }
})

myPromise3.then((data) => {
    console.log(data)
})
.catch((err) => {console.log( err)})
*/
//Resover várias promessas

const p1 = new Promise((resolve, reject) => {
    console.log("P1 ok")
})
const p2 = new Promise((resolve, reject) => {
    console.log("P2 ok")
})
const p3 = new Promise((resolve, reject) => {
    console.log("P3 ok")
})
const resoveAll = Promise.all([p1,
    p2,
    p3]).then((data) => {
        console.group(data)
    })