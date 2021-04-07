var express = require('express');
var router = express.Router();
const {Post, User, State, Activity} = require('../db/models');
// const findPosts = require('../public/javascripts/index')


/* GET home page. */
router.get('/', async function(req, res, next) {
    // findPosts();
    const posts = Post.findAll({order: ['createdAt', 'DESC']}
    );
  res.render('index', { title: 'Wanderhunt', posts}, );
});

module.exports = router;
