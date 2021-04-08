var express = require('express');
var router = express.Router();
const { Post, User, Activity, Comment } = require('../db/models');
const { asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  const comments = await Comment.findAll({ order: ['post_id'] });
  let popular = mostPopular(comments);
  let popularPosts = await getPosts(popular);
  let recentPosts = await getRecent();
  res.render('index', { title: 'Wanderhunt', popularPosts: popularPosts, recentPosts: recentPosts });
}));



function mostPopular(comments) {

  let popularPosts = []
  let currentPostId;
  let challengePostId;
  let tracker = {}

  for (let i = 0; i < comments.length && popularPosts.length < 5; i++) {
    if (!tracker[comments[i].post_id]) {
      tracker[comments[i].post_id] = [1]
    }
    if (!currentPostId) {
      currentPostId = comments[i].post_id;
    }
    if (currentPostId === comments[i].post_id) {
      tracker[comments[i].post_id]++;
    } else {
      challengePostId = comments[i].post_id
      tracker[comments[i].post_id]++;
    }
    if (challengePostId === comments[i].post_id) {
      tracker[comments[i].post_id]++;
    }
    if (tracker[challengePostId] > tracker[currentPostId] && !popularPosts.includes(tracker[challengePostId])) {
      currentPostId = challengePostId
      challengePostId = null;
    }
    if (i === comments.length - 1) {

      popularPosts.push(currentPostId);
      tracker[currentPostId] = 0
      i = 0
    }
  }

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

async function getRecent() {
  const recent = await Post.findAll({ order: ['createdAt'], limit: 10, include: User });
  return recent;
}
function topActivitiess(posts) {

}
function topStates(posts) {

}

function sortPopular(array) {


}

module.exports = router;
