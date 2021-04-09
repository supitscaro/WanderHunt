var express = require('express');
var router = express.Router();
const { Post, User, Activity, Comment, State } = require('../db/models');
const { asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const comments = await Comment.findAll({ order: ['post_id'] });
  let popular = mostPopular(comments);
  let popularPosts = await getPosts(popular);
  let recentPosts = await getRecentPosts();
  let activities = await topActivities();
  let activityPosts = await getActivityPosts(activities);
  let states = await topStates();
  let statePosts = await getStatePosts(states)
  res.render('index', { title: 'Wanderhunt', popularPosts: popularPosts, recentPosts: recentPosts, activityPosts: activityPosts, statePosts: statePosts });
}));



function mostPopular(comments) {

  let popularPosts = []
  let currentPostId;
  let challengePostId;
  let tracker = {}

  for (let i = 0; i < comments.length && popularPosts.length < 5; i++) {

    if (!tracker[comments[i].post_id]) {
      tracker[comments[i].post_id] = 0
    }

    if (!currentPostId && !popularPosts.includes(comments[i].post_id)) {
      currentPostId = comments[i].post_id;
    }

    if (currentPostId === comments[i].post_id) {
      tracker[comments[i].post_id]++;
    } else {
      if (!challengePostId && !popularPosts.includes(comments[i].post_id)) {
        challengePostId = comments[i].post_id
      }
    }

    if (challengePostId === comments[i].post_id) {
      tracker[comments[i].post_id]++;
      if (tracker[challengePostId] > tracker[currentPostId] && !popularPosts.includes(challengePostId)) {
        currentPostId = challengePostId
        challengePostId = null;
      }
    } else {
      challengePostId = comments[i].post_id
    }
    if (i === comments.length - 1) {

      popularPosts.push(currentPostId);
      tracker[currentPostId] = 0
      i = 0
    }
  }
  console.log(popularPosts);
  return popularPosts;
}

async function getPosts(popular) {
  popularPosts = []

  while (popular.length) {
    let post = await Post.findOne({ where: { id: `${popular[0]}` }, include: [User] })
    popularPosts.push(post);
    popular.shift();
  }
  return popularPosts;
}

async function getRecentPosts() {
  const recent = await Post.findAll({ order: [['createdAt', 'DESC']], limit: 10, include: User });
  return recent;
}

async function topActivities() {
  let popActivities = []
  let posts = await Post.findAll({ order: ['activity_id'] })


  let currentActivityId;
  let challengeActivityId;
  let tracker = {}

  for (let i = 0; i < posts.length && popActivities.length < 5; i++) {
    if (!tracker[posts[i].activity_id]) {
      tracker[posts[i].activity_id] = 0
    }
    if (!currentActivityId && !popActivities.includes(posts[i].activity_id)) {
      currentActivityId = posts[i].activity_id;
    }
    if (currentActivityId === posts[i].activity_id) {
      tracker[posts[i].activity_id]++;
    } else {
      if (!challengeActivityId && !popActivities.includes(posts[i].activity_id)) {
        challengeActivityId = posts[i].activity_id
      }
    }
    if (challengeActivityId === posts[i].activity_id) {
      tracker[posts[i].activity_id]++;
    }
    if (tracker[challengeActivityId] > tracker[currentActivityId] && !popActivities.includes(challengeActivityId)) {
      currentActivityId = challengeActivityId
      challengeActivityId = null;
    }
    if (i === posts.length - 1) {

      popActivities.push(currentActivityId);
      tracker[currentActivityId] = 0
      i = 0
    }
  }

  return popActivities;
}

async function getActivityPosts(activityArray) {
  activityPosts = []

  while (activityArray.length) {
    let post = await Post.findOne({ where: { id: `${activityArray[0]}` }, include: [Activity, User] })
    activityPosts.push(post);
    activityArray.shift();
  }
  return activityPosts;
}

async function topStates() {
  let popStates = []
  let posts = await Post.findAll({ order: ['state_id'] })


  let currentStateId;
  let challengeStateId;
  let tracker = {}

  for (let i = 0; i < posts.length && popStates.length < 5; i++) {
    if (!tracker[posts[i].state_id]) {
      tracker[posts[i].state_id] = 0
    }
    if (!currentStateId && !popStates.includes(posts[i].states_id)) {
      currentStateId = posts[i].state_id;
    }
    if (currentStateId === posts[i].state_id) {
      tracker[posts[i].state_id]++;
    } else {
      if (!challengeStateId && !popStates.includes(posts[i].states_id)) {
        challengeStateId = posts[i].state_id
      }
    }
    if (challengeStateId === posts[i].state_id) {
      tracker[posts[i].state_id]++;
    }
    if (tracker[challengeStateId] > tracker[currentStateId] && !popStates.includes(challengeStateId)) {
      currentStateId = challengeStateId
      challengeStateId = null;
    }
    if (i === posts.length - 1) {

      popStates.push(currentStateId);
      tracker[currentStateId] = 0
      currentStateId = null;
      i = 0
    }
  }

  return popStates;
}

async function getStatePosts(stateArray) {
  statePosts = []

  while (stateArray.length) {
    let post = await Post.findOne({ where: { state_id: `${stateArray[0]}` }, include: [State, User] })
    statePosts.push(post);
    stateArray.shift();
  }
  return statePosts;
}


module.exports = router;
