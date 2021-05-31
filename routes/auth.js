const cookieSession = require('cookie-session')
const express = require('express');
const bcrypt = require("bcrypt");
const router = express.Router();
const { getUserByEmail} = require('../controllers/auth.js');
const { body ,validationResult } = require('express-validator');

router.post('/register', body('email').isEmail, (req,res) =>{
    const errors = validationResult(req);
});

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
  

  
module.exports = router;