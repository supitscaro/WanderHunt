const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const { check, validationResult } = require('express-validator');
const { Post, State, Activity } = require("../db/models");
const { requireAuth } = require('../auth.js');

router.get('/:id', asyncHandler(async (req, res) => {
    const post = await Post.findByPk(req.params.id);
    res.render('post', { post });
}));

router.get('/create', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    let post = Post.build();
    let activities = await Activity.findAll();
    let states = await State.findAll();
    res.render('create-post', { csrfToken: req.csrfToken(), post, activities, states });
}));

router.post('/create', csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {

}))

module.exports = router;
