require('dotenv').config();

const config = {
  port: process.env.PORT,
  dbUrlMongoDB: process.env.DB_URL_MONGODB,
};

module.exports = config;
