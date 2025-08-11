const logiUser = (email, password, onSuccess, onError) => {
    setTimeout(() => {
        const error = false;
        if (error) {
            return onError(new Error('error in login!'))
        }
        console.log("User logged!")
        onSuccess({ email })
    }, 1500)
    console.log("after SetTimeout")
};

const getUserVideos = (email, callback) => {
    setTimeout(() => {
        callback(["video1", "video2", "video3"]);
    }, 2000)
}


const getVideosDetails = (video, callback) => {
    setTimeout(() => {
        callback({title : "video Title"})
    }, 2500);
}
const user = logiUser("felpe@gmail.com", "123456789", (user) => {
    getUserVideos(user.email, (videos) => {
        console.log({ videos });
        getVideosDetails(videos[0], (videoDetails) => {
            console.log({videoDetails})
        })
    });
}, (error) => {
    console.log({ error });
});

//console.log({ user })