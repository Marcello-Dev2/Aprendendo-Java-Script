const url = "https://jsonplaceholder.typicode.com/posts"

const loadingelement = document.querySelector("#loading")
const postscontainer = document.querySelector("#posts-Container")

//

async function getAllPosts() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    loadingelement.classList.add("hide")

    data.map((post)=> {
        const div = document.createElement("div")
        const title = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")
        
        title.innerText = post.title;
        body.innerText = post.body;
        link.innerText = "ler";
        link.setAttribute("href", `post.html?id=${post.id}`);

        div.appendChild(title);
        div.appendChild(body);
        div.appendChild(link);

        postscontainer.appendChild(div);
    });
 }
getAllPosts()