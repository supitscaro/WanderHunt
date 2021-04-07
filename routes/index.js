var express = require('express');
var router = express.Router();
const {Post} = require('../db/models');
const {getPosts} = require('../public/javascripts/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  const posts = Post.findAll()
  res.render('index', { title: 'Wanderhunt' });
});

module.exports = router;
