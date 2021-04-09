var express = require('express');
var router = express.Router();
const { csrfProtection, asyncHandler } = require("./utils");
const { User, Comment, Post } = require("../db/models");
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const { loginUser, restoreUser, requireAuth, logoutUser } = require('../auth.js');

const userValidators = [
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

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/sign-up', csrfProtection, (req, res) => {
  const user = User.build();
  res.render('sign-up', { user, csrfToken: req.csrfToken() });
})

router.post('/sign-up',
  userValidators,
  csrfProtection,
  asyncHandler(async (req, res, next) => {
    const { username, email, password } = req.body;

    const user = User.build({ username, email });

    const validationErrors = validationResult(req);
    console.log('validation errors', validationErrors);
    let errors = [];
    if (validationErrors.isEmpty()) {
      const hashedPassword = await bcrypt.hash(password, 10);

      user.hashedPassword = hashedPassword;

      await user.save()

      loginUser(req, res, user)

      res.redirect('/');
    } else {
      validationErrors.array().map((e) => errors.push(e.msg));
      res.render('sign-up', {
        user,
        errors,
        csrfToken: req.csrfToken(),
      })
    }

  }));
router.get('/log-in', csrfProtection, (req, res) => {
  res.render('log-in', {
    csrfToken: req.csrfToken(),
  });
})

const loginValidators = [
  check('email')
    .exists({ checkFalsey: true })
    .withMessage('Please provide a value for Email'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please provide a Password'),
];

router.post('/log-in', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    let errors = [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await User.findOne({ where: { email } });

      if (user !== null) {
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

        if (passwordMatch) {
          loginUser(req, res, user);
          console.log(req.session.auth)
          return res.redirect('/');
        }
      }
      errors.push('Login failed for the provided email address and password');
    } else {
      errors = validatorErrors.array().map((e) => e.msg);
    }

    res.render('log-in', {
      errors,
      csrfToken: req.csrfToken(),
    });
  })
);

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  let userId = parseInt(req.params.id, 10);
  let user = await User.findByPk(userId);
  let users_id = -1;
  if (res.locals.user) {
    users_id = res.locals.user.id;
  }
  const comments = await Comment.findAll({
    limit: 10,
    include: [{ model: User }, { model: Post }],
  });

  res.render('profile-page', { user, users_id, comments });
}));

router.get('/:id(\\d+)/settings', csrfProtection, requireAuth, asyncHandler(async (req, res) => {
  let userId = parseInt(req.params.id, 10);
  let user = await User.findByPk(userId);

  if (userId === res.locals.user.id) {
    res.render('edit-profile', { user, csrfToken: req.csrfToken() });
  } else {
    // set up not authorized page?
    res.redirect('/');
  }
}));

router.post('/:id(\\d+)/settings', userValidators, csrfProtection, requireAuth, asyncHandler(async (req, res) => {
  const { password, username, email } = req.body;
  let userId = parseInt(req.params.id, 10);
  let userToUpdate = await User.findByPk(userId);

  const validationErrors = validationResult(req);
  let user = { username, email };
  let errors = [];

  if (validationErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);

    user['hashedPassword'] = hashedPassword;

    await userToUpdate.update(user);

    res.redirect(`/${userId}`);
  } else {
    validationErrors.array().map((e) => errors.push(e.msg));
    res.render('edit-profile', {
      user,
      errors,
      csrfToken: req.csrfToken(),
    })
  }
}));

router.post('/logout', logoutUser, (req, res) => {
  res.redirect('/');
})

router.post('/demo', asyncHandler(async(req, res) => {
  let user = await User.findByPk(1);
  loginUser(req, res, user);
  res.redirect('/');
}));
 
module.exports = router;
