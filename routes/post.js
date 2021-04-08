const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const { check, validationResult } = require('express-validator');
const { Post, State, Activity, User } = require("../db/models");
const { requireAuth } = require('../auth.js');

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const postId = parseInt(req.params.id, 10);
    const post = await Post.findByPk(postId, {include: [User, State, Activity]});
    // if (!post) {
    //     res.render('../');
    // }
    res.render('post', { post });
}));

router.get('/create', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
    let post = Post.build();
    let activities = await Activity.findAll();
    let states = await State.findAll();
    res.render('create-post', { csrfToken: req.csrfToken(), post, activities, states, title: 'Create New Post', });
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
        console.log(req.body);
        const { title, description, gallery, state, activity } = req.body;
        let galleryArray = gallery.split(', ');
        let user_id = res.locals.user.id;
        let activityNum = parseInt(activity, 10);
        let stateNum = parseInt(state, 10);
        const post = Post.build({title, description, gallery: galleryArray, user_id, state_id: stateNum, activity_id: activityNum});
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
            console.log("hello");
            res.render('create-post', {
                title: 'Create New Post',
                post,
                errors,
                activities,
                states,
                csrfToken: req.csrfToken(),
            })
        }
}))

router.get('/:id(\\d+)/edit', csrfProtection, requireAuth, asyncHandler(async(req,res) => {
    const post_id = parseInt(req.params.id, 10)
    const post = await Post.findByPk(post_id);
    let activities = await Activity.findAll();
    let states = await State.findAll();

    if (post.user_id === res.locals.user.id){
        res.render('edit-post', { title: 'Edit Post', post, csrfToken: req.csrfToken(), activities, states,})
    } else {
        res.redirect('/');
    }
}));

router.post('/:id(\\d+)/edit', csrfProtection,
    postValidators,
    requireAuth,
    asyncHandler(async(req,res)=>{
        const { title, description, gallery, state, activity } = req.body;
        let galleryArray = gallery.split(', ');
        const post_id = parseInt(req.params.id, 10)
        const postToUpdate = await Post.findByPk(post_id);
        let activityNum = parseInt(activity, 10);
        let stateNum = parseInt(state, 10);
        let post = {title, description, gallery: galleryArray, state_id: stateNum, activity_id: activityNum}

        const validationErrors = validationResult(req);
        let errors = [];

        if (validationErrors.isEmpty()){
            await postToUpdate.update(post);
            res.redirect(`/post/${post_id}`);
        } else {
            validationErrors.array().map((e) => errors.push(e.msg));
            let activities = await Activity.findAll();
            let states = await State.findAll();
            res.render('create-post', {
                title: 'Create New Post',
                post,
                errors,
                activities,
                states,
                test: activity,
                csrfToken: req.csrfToken(),
            })
        }
}))

module.exports = router;
