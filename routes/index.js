var express = require('express');
var router = express.Router();
const { Post, User, Activity } = require('../db/models');
const { asyncHandler } = require('./utils');

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  // findPosts();
  const posts = await Post.findAll({
    order: [['id', 'DESC']],
    limit: 10,
    include: { model: User },
  })
  const activity = await Post.findAll({
    order: ['activity_id'], include: {model: Activity}
  })
  console.log(activity);
  res.render('index', { title: 'Wanderhunt', posts },);
}));

module.exports = router;
