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
        where: {
            user_id,
            include: { Post }
        }
    });
    if (comments === null) {
        next(commentsNotFound());
    } else {
        res.json({ comments });
    }
}));

// delete

// post

// put


module.exports = router;
