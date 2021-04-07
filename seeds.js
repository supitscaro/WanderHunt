const { User, Post, Activity, Comment } = require('./db/models');
const fetch = require('node-fetch');
const bcrypt = require('bcryptjs');
const express = require('express');


async function createUsers(num) {
    let users = []
    let index = 31;
    while (index <= num) {
        let result = await fetch(`http://swapi.dev/api/people/${index}`)
        let person = await result.json()
        let hashedPassword = await bcrypt.hash((person.birth_year + person.height), 10)
        let username = person.name
        let email = `${person.name.split(' ').join('')}@email.com`
        let user = { username, hashedPassword, email }
        users.push(user);
        index++;
    }
    console.log(users);
    return users;
}


async function createPosts(num) {
    let description = [];
    while (num) {

        let postPath = await fetch(`https://hipsum.co/api/?type=hipster-centric&sentences${Math.floor(Math.random() * (5 - 2) + 2)}&paras=${Math.floor(Math.random() * (5 - 2) + 2)}`)
        let posts = await postPath.json()
        description.push(posts)
        num--
    }
    console.log(description);



}


createUsers(50);

module.exports = {
    createUsers,
    createPosts
}
