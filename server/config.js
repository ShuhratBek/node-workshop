const config = {
  environment: process.env.NODE_ENV || 'dev',
  server: {
    port: process.env.PORT || 8000
  },
  mongo: {
    url: process.env.MONGO_DB_URI ||
    'mongodb://localhost:27017/demo-api'
  }
};

module.exports = config;
