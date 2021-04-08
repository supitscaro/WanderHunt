var express = require('express');
var router = express.Router();
const { Post, User, Activity, Comment } = require('../db/models');
const { asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  // findPosts();
  const comments = await Comment.findAll({ order: ['post_id'] });
  let popular = mostPopular(comments);
  // let recent = mostRecent(posts);
  // let activity = topActivities(posts);
  // let states = topStates(posts);
  // console.log(posts);
  res.render('index', { title: 'Wanderhunt' });
}));



function mostPopular(comments) {
  let commentPosts = comments.forEach(comment => {
    console.log(comment.post_id)
  })
  let popularPosts = []
  let popularIndex;
  let challengeIndex;
  let currentPostId;
  let challengePostId;
  let currentCount = 0;
  let challengeCount = 0;
  let tracker = {}

  for (let i = 0; i < comments.length && popularPosts.length < 5; i++) {
    if (!tracker[comments[i].post_id]){
      tracker[comments[i].post_id] = []
    }
    if (!currentPostId){
      currentPostId = comments[i].post_id;
      popularIndex = ;
    }
    if (currentPostId === comments[i].post_id) {
      currentCount++;
    } else {
      challengeUser = comments[i].post_id
      challengeCount++;
      challengeIndex = i
    }
    if (challengePostId === comments[i].post_id){
        challengeCount++;
    }
    if (challengeCount > currentCount && !tracker[comments[challengeIndex].post_id]) {
      currentCount = challengeCount
      currentPostId = challengePostId
      popularIndex = challengeIndex
    }
    if (i === comments.length - 1) {

      let pop = comments[popularIndex].post_id
      comments.splice(popularIndex, 1)
      tracker[pop] = currentCount;
      popularPosts.push(pop);
      i = 0
    }
  }

  console.log(popularPosts);
}


function mostRecent(posts) {

}
function topActivitiess(posts) {

}
function topStates(posts) {

}

function sortPopular(array) {


}

module.exports = router;
