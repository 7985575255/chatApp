const Sequelize = require('sequelize');

const sequelize = new Sequelize('sys', 'root', 'Av1122' ,
{dialect: 'mysql', host: 'localhost'});

module.exports =  sequelize;