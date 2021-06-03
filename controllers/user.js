const sequelize = require('sequelize');
const { User } = require('../models/index.js');


module.exports = {
    getUserById: function (id) {
        return User.findByPk(id);
    },

    deleteUser: function (id) {
        //Get current date in mysql format
        let timeDeleted = new Date().toISOString().slice(0, 19).replace('T', ' ');

        return User.update({ deletedAt: timeDeleted }, {
            where: {
                id
            }
        });
    },
    read: function(){
        return User
        .findAll({
            attributes: ['id', 'email', 'name', 'roleId']
        })
    },

    create: function({email, name, password}){
        return User
        .create({
            name: name,
            email: email,
            password: password,
            roleId: 2
        })
        .then(res => res)
    }
};