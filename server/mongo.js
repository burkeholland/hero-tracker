const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const mongoUri = process.env.CONNECTION_STRING;

function connect() {
  return mongoose.connect(mongoUri, { useMongoClient: true });
}

module.exports = {
  connect,
  mongoose,
};
