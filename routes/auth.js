const cookieSession = require('cookie-session')
const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();
const user = require('../controllers/user');
const { getUserByEmail } = require('../controllers/auth.js');
const { body ,validationResult } = require('express-validator');

router.post('/register', body('email').isEmail(), body('password').isLength({ min: 6 }), function (req, res) {
  const errors = validationResult(req);
  validate(errors)
  /* Encrypt password for send to BD */
  /* we are driver like a promise, in the finish the encrypt call to create and change the pass for the passhash*/
  hashPassword(req.body.password)
    .then(r => user.create(req.body, req.body.password = r, res))
    .then(r => {
      // after successfull registration, a JWT token gets generated to authenticate user
      res.status(200).send(r);
    })
    .catch(err => console.log(err))
})
router.post(
    '/login', 
    body('email').isEmail().normalizeEmail(), 
    body('password').not().isEmpty().trim().escape(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;
        const result = await loginUser(email, password);
        if (!result) {
            return res.status(409).json({ error: 'Incorrect username or password' });
        }
        return res.status(200).send(email)
});

async function loginUser(email, password) {
    try {
      const result = await getUserByEmail(email);
      if (result) {
        const { dataValues } = result;
        console.log(dataValues)
        const compare = await bcrypt.compare(password, dataValues.password);
        if (compare) {
          return result.dataValues;
        }
      } else {
        return false;
      }
    } catch (e) {
      return { error: e };
    }
};
  
async function hashPassword(password) {
  const passwordHash = await bcrypt.hash(password, 10);
  return passwordHash
}

function validate(errors) {
  if (!errors.isEmpty()) {
    if (errors.errors.param == 'email') {
      return res.status(400).send('Email invalido');
    }
    if (errors.errors.param === 'password') {
      return res.status(400).send('Password invalido');
    }
    return res.status(400).json({ errors: errors.array() });
  }
}
  
module.exports = router;