const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const { check, validationResult } = require('express-validator');
const { Post, State, Activity } = require("../db/models");
const { requireAuth } = require('../auth.js');

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = await Post.findByPk(postId);
    // if (!post) {
    //     res.render('../');
    // }
    res.render('post', { post });
}));

router.get('/create', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    let post = Post.build();
    let activities = await Activity.findAll();
    let states = await State.findAll();
    res.render('create-post', { csrfToken: req.csrfToken(), post, activities, states });
}));

let postValidators = [
    check('username')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a username')
        .isLength({ max: 50 })
        .withMessage('Must not be longer then 50 characters'),
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an email')
        .isLength({ max: 255 })
        .withMessage('Must not be longer then 255 characters')
        .isEmail()
        .withMessage('Must be a valid email'), //Check for unique email
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a password'), //Require certain characters
    check('confirmedPassword')
        .exists({ checkFalsy: true })
        .withMessage('Please confirm password')
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords must match')
            }
            return true
        }),
]

router.post('/create', csrfProtection, requireAuth, asyncHandler(async (req, res, next) => {

}))

module.exports = router;
