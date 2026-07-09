const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://api.sms.ir/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "text/plain",
    "X-API-KEY": "YOURAPIKEY",
  },
});

module.exports = axiosInstance;
