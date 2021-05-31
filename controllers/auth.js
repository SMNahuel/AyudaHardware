const bcrypt = require('bcrypt');
const { User } = require('../models/index.js');

module.exports = {
    getUserByEmail: function(email){
        return User.findOne({ where: { email } });
    },
    getAllUsers : function() {
        return User.findAll();
    },
    create: function({email, password, name}){
        console.log(email, password, name)
        return User
        .create({
            name: name,
            email: email,
            password: password,
            roleId: 2
        })
        .then(res => res)
    }
}
