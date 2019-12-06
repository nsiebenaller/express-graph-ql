const Sequelize = require('sequelize');

const fetchMember = require('./member.js');
const fetchTag = require('./tag.js');
const fetchUser = require('./user.js');
const fetchEmailGroup = require('./emailGroup.js');

// Load all models into the database
function initializeModels(database) {
  fetchMember(database, Sequelize.DataTypes);
  fetchTag(database, Sequelize.DataTypes);
  fetchUser(database, Sequelize.DataTypes);
  fetchEmailGroup(database, Sequelize.DataTypes);
}

// Associate models with joins
function associateModels(database) {
  Object.keys(database.models).forEach((key) => {
    if(database.models[key].associate) {
      database.models[key].associate(database.models)
    }
  })
}

module.exports = { initializeModels, associateModels };
