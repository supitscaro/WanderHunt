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
async function getTitles(num) {
    let titles = [];
    let index = 1;
    while(titles.length <= num) {
        let result = await fetch(`http://swapi.dev/api/planets/${index}`)
        if (result){
            let planet = await result.json()
            titles.push(planet.name+planet.diameter)
        }
        index++;
    }
    return titles;
}
async function getDescriptions(num) {
    let descriptions = [];
    let index = 1
    while (descriptions.length <= num) {

        let postPath = await fetch(`https://hipsum.co/api/?type=hipster-centric&sentences${Math.floor(Math.random() * (5 - 2) + 2)}&paras=${Math.floor(Math.random() * (5 - 2) + 2)}`)
        let descArray = await postPath.json()
        if (descArray){
        descriptions.push(descArray.join("\n"));
        index++;
        }
    }
    return descriptions
}
async function createPosts(num) {

    let titles = await getTitles(num)
    let descriptions = await getDescriptions(num)
    let user_ids = [];
    let activity_ids = [];
    let state_ids = [];

    const index = 1

    while(index <= num){
    let user_id = Math.floor(Math.random() * (50 - 1) + 1)
    let activity_id = Math.floor(Math.random() * (22 - 1) + 1)
    let state_id = Math.floor(Math.random() * (51 - 1) + 1)
    user_ids.push(user_id);
    activity_ids.push(activity_id)
    state_ids.push(state_id);
    }
    console.log(user_ids);




}


createPosts(1);

module.exports = {
    createUsers,
    createPosts
}
