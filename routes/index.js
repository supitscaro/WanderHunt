var express = require('express');
var router = express.Router();
const { Post, User } = require('../db/models');
const { asyncHandler } = require('./utils');
const { getPosts } = require('../public/javascripts/index')

/* GET home page. */
router.get('/', asyncHandler(async (req, res, next) => {
  // findPosts();
  const posts = await Post.findAll({
    order: [['id', 'DESC']],
    limit: 10,
    include: { model: User },
  }
  );
  console.log(posts);
  res.render('index', { title: 'Wanderhunt', posts },);
}));

module.exports = router;
