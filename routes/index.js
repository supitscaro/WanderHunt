var express = require('express');
var router = express.Router();
const { asyncHandler } = require("./utils");
const { Post, User, State, Activity, sequelize } = require('../db/models');
// const findPosts = require('../public/javascripts/index')


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
