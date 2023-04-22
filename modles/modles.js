const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const User = sequelize.define('appointments',{
    id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    Name: {
        type:Sequelize.STRING,
        unique:true
    },
    Email: {
        type:Sequelize.STRING,
        unique:true
    },
    number: {
        type:Sequelize.INTEGER,
        unique:true
    }
})

module.exports = User;