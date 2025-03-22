const axios = require("axios");
const config = require("../config/config");

const encodedAuth = Buffer.from(
  `${config.CM_USERNAME}:${config.CM_PASSWORD}`
).toString("base64");

const authHeaders = {
  Authorization: `Basic ${encodedAuth}`,
};

const getSubscribers = async (page, pagesize, orderField, orderDirection) => {
  try {
    const response = await axios.get(
      `${config.BASE_URL}/lists/${config.LIST_ID}/active.json?page=${page}&pagesize=${pagesize}&orderfield=${orderField}&orderdirection=${orderDirection}`,
      { headers: authHeaders }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addSubscriber = async (email, name) => {
  try {
    const response = await axios.post(
      `${config.BASE_URL}/subscribers/${config.LIST_ID}.json`,
      {
        EmailAddress: email,
        Name: name,
        Resubscribe: true,
        ConsentToTrack: "Yes",
      },
      { headers: authHeaders }
    );
    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeSubscriber = async (email) => {
  try {
    await axios.delete(
      `${config.BASE_URL}/subscribers/${config.LIST_ID}.json?email=${email}`,
      { headers: authHeaders }
    );
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getSubscribers,
  addSubscriber,
  removeSubscriber,
};
