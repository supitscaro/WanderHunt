
document.addEventListener("load", (event)=>{

    async function getPosts(){
        let result = await fetch('localhost:8080/')
        let posts = result.json();
        if (posts){
            console.log(posts[1].title)
        }
    }
    getPosts();
})

module.exports = getPosts;
