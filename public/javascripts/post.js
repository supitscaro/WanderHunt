function refreshCSS(){
    let links = document.getElementsByTagName('link');
    for (let i = 0; i < links.length; i++) {
        if (links[i].getAttribute('rel') == 'stylesheet') {
            let href = links[i].getAttribute('href').split('?')[0];
            let newHref = href + '?version=' + new Date().getMilliseconds();
            links[i].setAttribute('href', newHref);
        }
    }
}
 
let profilePhoto = document.querySelector('.author_photo');
profilePhoto.addEventListener('click', (e) => {
    let targetId = e.target.id;
    let userId = targetId.slice(7);
    window.location.href = `/users/${userId}`;
})

let editButton = document.querySelector('.edit_button');
editButton.addEventListener('click', (e) => {
    let targetId = e.target.id;
    let postId = targetId.slice(12);
    window.location.href= `/post/${postId}/edit`;
})

let commentProfiles = document.querySelectorAll('.commentProfilePhoto');
commentProfiles.forEach((el) => {
    el.addEventListener('click', (e) => {
        let targetId = e.target.id;
        let userId = targetId.slice(12);
        window.location.href= `/users/${userId}`;
    })
})

let submitComment = document.querySelector('.submitComment');

submitComment.addEventListener('click', async (e) => {
    e.preventDefault();
    let content = document.getElementById('newComment').value
    let user_id = e.target.id.slice(14);
    let currentURL = window.location.href;
    let post_id= currentURL.slice(currentURL.indexOf('post') + 5);
    let res = await fetch('http://localhost:8080/comments/', { //Need to change this to match heroku website
        method: "POST",
        body: JSON.stringify({user_id, post_id, content}),
        headers: { "Content-type": "application/json" }
    })
    let result = await res.json();

    if (result.comment){
        const comments_body = document.querySelector('.comments_body');
        let commentHtml = `
        <div class="indiviualComment" style="border-bottom: 1px solid lightgray"> 
            <div class="commentTop">
                <img style= "margin:10px 0px 0px 15px"class="commentProfilePhoto" src="${result.comment.User.profilePhoto}" id="commentUser_${result.comment.User.user_id}">
                <h4 class="commentProfileName" style="margin-top:24px"> ${result.comment.User.username} </h4>
            </div>
            <p class="commentContent" style="padding: 0px 15px 15px 15px"> ${result.comment.content} </p>
        </div>`
        comments_body.innerHTML = comments_body.innerHTML + commentHtml;
        document.getElementById('newComment').value = ''
    } else {
        return;
    }
})

const deleteBtns = document.querySelectorAll('.deleteCommentBtn');

deleteBtns.forEach((el) => {
    el.addEventListener('click', async (e) => {
        let comment_id = e.target.id.slice(14);
        let res = await fetch(`http://localhost:8080/comments/${comment_id}`, {
            method: "DELETE",
            headers: { "Content-type": "application/json" }
        });
        // let result = await res.json();
        if (res.status === 204){
            let deleteDiv = document.getElementById(`individualComment_${comment_id}`)
            deleteDiv.classList.add("hideDiv");
        }
    })
})
