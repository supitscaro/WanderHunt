var express = require('express');
const Sequelize = require('sequelize');
var router = express.Router();
const { Post, User, Activity, Comment, State } = require('../db/models');
const { asyncHandler } = require('./utils');
const Op = Sequelize.Op;


router.get('/:searchString', asyncHandler(async (req, res, next) => {
     let toSearch = req.params.searchString
     let activityResults = await Activity.findAll({
         where: {
             name: {
                 [Op.iLike]: `%${toSearch}%`
             }
         }
     });
     let stateResults = await State.findAll({
        where: {
            name: {
                [Op.iLike]: `%${toSearch}%`
            }
        }
     });
    let userResults = await User.findAll({
        where: {
            username: {
                [Op.iLike]: `%${toSearch}%`
            }
        }
    });

    let activityIds = activityResults.map(e => e.id);
    let stateIds = stateResults.map(e => e.id);
    let userIds = userResults.map(e => e.id);

     let posts = await Post.findAll({
        where: {
            [Op.or]: [
                {
                    state_id: [...stateIds]

                },
                {
                    activity_id: [...activityIds]
                },
                {
                    user_id: [...userIds]
                },
                {
                    title: {
                        [Op.iLike]: `%${toSearch}%`
                    }
                },
                {
                    description: {
                        [Op.iLike]: `%${toSearch}%`
                    }
                }

            ]
        },
        include: [User, State, Activity]
     })

    res.render('search', { posts, toSearch })
}));

module.exports = router;
