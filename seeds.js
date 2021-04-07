// const { User, Post, Activity, Comment } = require('./db/models');
const fetch = require('node-fetch');
const bcrypt = require('bcryptjs');



async function createUsers(num) {
    let users = []
    let index = 31;
    while (index <= num) {
        let result = await fetch(`http://swapi.dev/api/people/${index}`)
        if (result){
        let person = await result.json()
        let hashedPassword = await bcrypt.hash((person.birth_year + person.height), 10)
        let username = person.name
        let email = `${person.name.split(' ').join('')}@email.com`
        let user = { username, hashedPassword, email, createdAt: new Date(), updatedAt: new Date() }
        users.push(user);
        // console.log(user);
        }
        index++;
    }
    console.log(users);
    return users;
}


async function createPosts(num) {
    let description = [];
    while (num) {

        let postPath = await fetch(`https://hipsum.co/api/?type=hipster-centric&sentences${Math.floor(Math.random() * (5 - 2) + 2)}&paras=${Math.floor(Math.random() * (5 - 2) + 2)}`)
        let descArray = await postPath.json()
        description.push(posts)
        num--
    }
    console.log(description);



}


createPosts(10);

module.exports = {
    createUsers,
    createPosts
}
