const Sequelize = require('sequelize');
const Config = require('./config.json');


const connection = new Sequelize(
  Config.database,
  Config.user,
  Config.password,
  Config
);

module.exports = connection;
