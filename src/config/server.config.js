process.loadEnvFile();

module.exports = {
  PORT: process.env.PORT || 3000,
  MONGO_URI: process.env.MONGO_URI,
  NODE_ENV: process.env.NODE_ENV,
  LOGDB_URI: process.env.LOGDB_URI,
};
