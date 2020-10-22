var configLoader = require('../configLoader');

const config = configLoader.GetDBConfig();

const build = (db) => {
  return config.db_data.baseUri
    .replace('<user>', config.db_data.cred.name)
    .replace('<password>', config.db_data.cred.password)
    .replace('<db>', db);
};

module.exports = { build };
