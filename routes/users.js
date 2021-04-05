var express = require('express');
var router = express.Router();
const {csrfProtection, asyncHandler} = require("./utils");
const { User } = require("../db/models");
const { check, validationResult }= require('express-validator');
const bcrypt = require('bcryptjs');
const {loginUser} = require('../auth.js');

const userValidators = [
  check('username')
    .exists({ checkFalsey:true })
    .withMessage('Please provide a username')
    .isLength( { max: 50 })
    .withMessage('Must not be longer then 50 characters'),
  check('email')
    .exists( {checkFalsey: true})
    .withMessage('Please provide an email')
    .isLength({ max: 255 })
    .withMessage('Must not be longer then 255 characters')
    .isEmail()
    .withMessage('Must be a valid email'), //Check for unique email
  check('password')
    .exists( {checkFalsey: true})
    .withMessage('Please provide a password'), //Require certain characters
  check('confirmPassword')
    .exists({ checkFalsey:true })
    .withMessage('Please confirm password')
    .custom((value, { req }) => {
      if (value !== req.body.password){
        throw new Error('Passwords must match')
      }
      return true
    }),
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/sign-up', csrfProtection, (req, res) => {
  const user = User.build();
  res.render('sign-up', { user , csrfToken: req.csrfToken()});
})

router.post('/sign-up',
  userValidators,
  csrfProtection,
  asyncHandler(async(req, res) => {
    const { username, email, password} = req.body;

    const user = User.build({username, email});

    const validationErrors = validationResult(req);

    if (validationErrors.isEmpty()){
      const hashedPassword = await bcrypt.hash(password, 10);

      user.hashedPassword = hashedPassword;
      await user.save()

      res.redirect('/');
    } else {
      let errors = validationErrors.array().map((e) => e.msg);

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
    .exists({ checkFalsey: true})
    .withMessage('Please provide a value for Email'),
  check('password')
    .exists({ checkFalsy: true})
    .withMessage('Please provide a Password'),
];

router.post('/log-in', csrfProtection, loginValidators,
  asyncHandler(async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    let errors= [];
    const validatorErrors = validationResult(req);

    if (validatorErrors.isEmpty()) {
      const user = await User.findOne({ where: { email }});

      if (user !== null){
        const passwordMatch = await bcrypt.compare(password, user.hashedPassword.toString());

        if (passwordMatch) {
          loginUser(req, res, user);
          return res.redirect('/');
        }
      }
    errors.push('Login failed for the provided email address and password');
    }else{
      errors = validatorErrors.array().map((e) => e.msg);
    }

    res.render('log-in', {
      errors,
      csrfToken: req.csrfToken(),
    });
  })
)


module.exports = router;
