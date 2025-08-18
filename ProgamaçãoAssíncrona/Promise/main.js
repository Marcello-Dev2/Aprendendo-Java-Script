/*
const getUserInfo = (id) => {

    const data = fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            return response.json()
        })


        .then(data => {
            console.log(data)
        })
}


getUserInfo(1)
*/
const getUserInfo = async (id) => {
    try{
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    console.log(data)
    }catch{
        console.error(err);
        
    }
}
( async () =>{
    const usersData = await Promise.all([
        await getUserInfo(1),
        await getUserInfo(2),
        await getUserInfo(3)
    ])
    console.log(usersData)
})()