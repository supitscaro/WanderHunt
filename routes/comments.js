const express = require('express');
const router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const { check, validationResult } = require('express-validator');
const { Post, State, Activity, User, Comment } = require("../db/models");
const { requireAuth } = require('../auth.js');

const commentsNotFound = () => {
    let error = new Error('Could not find comments');
    error.status = 404;
    return error;
}

// get
router.get('/post/:id(\\d+)', asyncHandler(async (req, res, next) => {
    let post_id = parseInt(req.params.id, 10);
    let comments = await Comment.findAll({
        where: {
            post_id
        }
    });
    if (comments === null) {
        next(commentsNotFound());
    } else {
        res.json({ comments });
    }
}));

router.get('/user/:id(\\d+)', asyncHandler(async (req, res, next) => {
    let user_id = parseInt(req.params.id, 10);
    let comments = await Comment.findAll({
        include: { model: Post },
        where: {
            user_id,
        }
    });
    if (comments === null) {
        next(commentsNotFound());
    } else {
        res.json({ comments });
    }
}));

// delete
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res, next) => {
    let id = parseInt(req.params.id, 10);
    let comment = await Comment.findByPk(id);
    if (!comment) {
        next(commentsNotFound());
    } else {
        await comment.destroy();
        res.status(204).end();
    }

}))
let commentValidators = [
    check('content')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a comment')]
// post
router.post('/', requireAuth, commentValidators, asyncHandler(async (req, res, next) => {
    const { user_id, post_id, content } = req.body;
    let validationErrors = validationResult(req);
    if (validationErrors.isEmpty()){
        let comment = await Comment.create({user_id, post_id, content});
        res.json({comment});
    } else{
        let errors = validationErrors.array().map((e) => e.msg)
        res.json({errors});
    }
}))

// put

router.put('/:id(\\d+)', requireAuth, commentValidators, asyncHandler(async (req, res, next) => {
    const { user_id, post_id, content } = req.body;

    let id = parseInt(req.params.id, 10);
    let commentToUpdate = await Comment.findByPk(id);
    let validationErrors = validationResult(req);
    let comment = { content };
    if (validationErrors.isEmpty()) {
        await commentToUpdate.update(comment);
        res.json({commentToUpdate});
    } else{
        let errors = validationErrors.array().map((e) => e.msg)
        res.json({errors});
    }
}))

module.exports = router;
