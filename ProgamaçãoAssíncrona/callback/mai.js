const logiUser = (email, password, callback) => {
    setTimeout (() => {
        console.log("User logged!")
        callback ({ email })
    }, 1500)
};

const user = logiUser("felpe@gmail.com", "123456789", (user) => {
    console.log({ user })
});

//console.log({ user })