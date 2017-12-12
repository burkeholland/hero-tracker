const mongoose = require("mongoose");
const env = require("./env/environment");

mongoose.Promise = global.Promise;

const mongoUri =
  process.env.CONNECTION_STRING ||
  `mongodb://${env.dbName}:${env.key}@${env.dbName}.documents.azure.com:${
    env.cosmosPort
  }/?ssl=true`;

function connect() {
  return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
  connect,
  mongoose,
};
