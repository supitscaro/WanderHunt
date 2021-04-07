const {Post, User, State, Activity, Comment} = require('.../db/models');
window.addEventListener("load", (event)=>{
    async function getPosts(){
        let posts = await Post.findAll({include: {User, State, Activity}});
        posts.forEach(post => {
            console.log(post.title);
        })
    }



})
