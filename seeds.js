const { User, Post, Activity, Comment } = require('./db/models');
const fetch = require('node-fetch');
const bcrypt = require('bcryptjs');
const express = require('express');


async function createUsers(num) {
    let users = []
    let index = 1;
    while (index <= num) {
        let result = await fetch(`http://swapi.dev/api/people/${index}`)
        let person = await result.json()
        let hashedPassword = await bcrypt.hash((person.birth_year + person.height), 10)
        let username = person.name
        let email = `${person.name.split(' ').join('')}@email.com`
        let user = { username, hashedPassword, email }
        console.log(user);
        users.push(user);

        index++;

    }
    users.forEach(async (user) => {
        await User.create(user)
    })

}

let activities = [
    { name: "Backpacking" },
    { name: "Camping" },
    { name: "Hiking" },
    { name: "Climbing" },
    { name: "Caving" },
    { name: "Ice Climbing" },
    { name: "Mountaineering" },
    { name: "Cycling" },
    { name: "Mountain Biking" },
    { name: "Geocaching" },
    { name: "Running" },
    { name: "Photography" },
    { name: "Exploring" },
    { name: "Snowsports" },
    { name: "Kayaking" },
    { name: "Kayaking" },
    { name: "Cruising" },
    { name: "Safari" },
    { name: "Watersports" },
    { name: "Snorkeling" },
    { name: "picnicing" },
    { name: "Sightseeing" }
]


let states = [
    { name: "Alabama", abbr: "AL" },
    { name: "Alaska", abbr: "AK" },
    { name: "Arizona", abbr: "AZ" },
    { name: "Arkansa", abbr: "AR" },
    { name: "California", abbr: "CO" },
    { name: "Connecticut", abbr: "CT" },
    { name: "Delaware", abbr: "DE" },
    { name: "Florida", abbr: "FL" },
    { name: "Georgia", abbr: "GA" },
    { name: "Hawaii", abbr: "HI" },
    { name: "Idaho", abbr: "ID" },
    { name: "Illinois", abbr: "IL" },
    { name: "Indiana", abbr: "IN" },
    { name: "Iowa", abbr: "IA" },
    { name: "Kansas", abbr: "KS" },
    { name: "Kentucky", abbr: "KY" },
    { name: "Louisiana", abbr: "LA" },
    { name: "Maine", abbr: "ME" },
    { name: "Maryland", abbr: "MD" },
    { name: "Massachusetts", abbr: "MA" },
    { name: "Michigan", abbr: "MI" },
    { name: "Minnesota", abbr: "MN" },
    { name: "Mississippi", abbr: "MS" },
    { name: "Missouri", abbr: "MO" },
    { name: "Montana", abbr: "MT" },
    { name: "Nebraska", abbr: "NE" },
    { name: "Nevada", abbr: "NV" },
    { name: "New Hampshire", abbr: "NH" },
    { name: "New Jersey", abbr: "NJ" },
    { name: "New Mexico", abbr: "NM" },
    { name: "New York", abbr: "NY" },
    { name: "North Carolina", abbr: "NC" },
    { name: "North Dakota", abbr: "ND" },
    { name: "Ohio", abbr: "OH" },
    { name: "Oklahoma", abbr: "OK" },
    { name: "Oregon", abbr: "OR" },
    { name: "Pennsylvania", abbr: "PA" },
    { name: "Rhode Island", abbr: "RI" },
    { name: "South Carolina", abbr: "SC" },
    { name: "South Dakota", abbr: "SD" },
    { name: "Tennessee", abbr: "TN" },
    { name: "Texas", abbr: "TX" },
    { name: "Utah", abbr: "UT" },
    { name: "Vermont", abbr: "VT" },
    { name: "Virginia", abbr: "VA" },
    { name: "Washington", abbr: "WA" },
    { name: "West Virginia", abbr: "WV" },
    { name: "Wisconsin", abbr: "WI" },
    { name: "Wyoming", abbr: "WY" }
]




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


createUsers(10);

module.exports = {
    createUsers,
    createPosts
}
