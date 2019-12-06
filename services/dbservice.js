const database = require('./db/database.js');
const dbUtil = require('./db/models/index.js');


const getConnection = () => database;

const start = async () => {
  try {
    await database.authenticate();
    console.log('Database connection established!');

    // Load all models
    dbUtil.initializeModels(database);

    // Associate all models if applicable
    dbUtil.associateModels(database);

    return database;
  } catch(e) {
    console.log('Unable to connect to database ', err);
    process.exit(1);
    return;
  }
}

module.exports = {
  start,
  getConnection,
};
