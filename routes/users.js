var express = require('express');
var router = express.Router();
const {csrfProtection, asyncHandler} = require("./utils");
const { User } = require("../db/models");
const { check, validationResult }= require('express-validator');
const bcrypt = require('bcryptjs');

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
  check('confirmedPassword')
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
      console.log(errors);
      res.render('sign-up', {
        user,
        errors,
        csrfToken: req.csrfToken(),
      })
    }

}));

module.exports = router;
