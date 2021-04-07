var express = require('express');
var router = express.Router();
const {Post} = require('../db/models');

/* GET home page. */
router.get('/', function(req, res, next) {
  const posts = Post.findAll({where: {
    order
  }}
  res.render('index', { title: 'Wanderhunt' });
});

module.exports = router;
