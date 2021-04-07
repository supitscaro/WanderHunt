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
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a title'),
    check('description')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an description'),
    check('gallery')
        .exists({ checkFalsy: true })
        .withMessage('Please provide at least one photo url'), //Require certain characters
    check('state')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a location'),
    check('activity')
        .exists({ checkFalsy: true })
        .withMessage('Please provide an activity type'),
]

router.post('/create', 
    csrfProtection, 
    requireAuth,
    postValidators, 
    asyncHandler(async (req, res, next) => {
        const { title, description, gallery, state, activity } = req.body;

        let galleryArray = gallery.split(', ');
        let user_id = res.locals.user.id;
    
        const post = Post.build({title, description, gallery: galleryArray, user_id, state_id: state, activity_id: activity});
        const validationErrors = validationResult(req);
        let errors = [];
        
        if (validationErrors.isEmpty()){
            await post.save();
            let newPost = await Post.findOne({where : {title: title, description: description}});
            res.redirect(`/post/${newPost.id}`);
        } else {
            validationErrors.array().map((e) => errors.push(e.msg));
            let activities = await Activity.findAll();
            let states = await State.findAll();
            res.render('create-post', {
                post,
                errors,
                activities,
                states,
                csrfToken: req.csrfToken(),
            })
        }
}))

module.exports = router;
