const express = require('express');
const {register, login} = require('../controllers/auth.js');
const router = express.Router();

router.post('/register', register);

router.post('/login', (req, res) => {
    const {email, password} = req.body
    login(email, password)
        .then(result => res.status(200).send(result))
        .catch(err => res.status(400).send(err))
});


module.exports = router;