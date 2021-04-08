window.addEventListener('DOMContentLoaded', async ()=> {
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

    let submitComment = document.getElementById('submitComment');

    submitComment.addEventListener('click')
})