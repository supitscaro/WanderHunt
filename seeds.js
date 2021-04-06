const {User, Post, Activity, Comment} = require('./db/models');
const fetch = require('node-fetch');

let users = []

async function findUsers() {
    let test = await fetch("https://swapi.dev/api/people")
    let people = await test.json()
    console.log(people.results[1].name)
}

findUsers();
