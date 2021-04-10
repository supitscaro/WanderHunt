

window.addEventListener("load", (event)=>{
    let navbarSearch = document.querySelector('.navbar_search')
    navbarSearch.addEventListener("keyup", async (event) => {
        if (event.keyCode === 13){
            let searchString = navbarSearch.value;
            window.location.href = `/search/${searchString}`;
        }
    })

    // async function getPosts(){
    //     let result = await fetch('localhost:8080/')
    //     let posts = result.json();
    //     if (posts){
    //         console.log(posts[1].title)
    //     }
    // }
    // getPosts();
})

// module.exports = getPosts;
