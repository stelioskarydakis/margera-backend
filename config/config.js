require("dotenv").config();

const config = {
  CM_USERNAME: process.env.CM_API_KEY,
  CM_PASSWORD: process.env.CM_PASSWORD,
  LIST_ID: process.env.LIST_ID,
  CLIENT_ID: process.env.CLIENT_ID,
  BASE_URL: process.env.BASE_URL,
};

module.exports = config;
