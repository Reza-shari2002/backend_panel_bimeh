const axios = require("axios");
require("dotenv").config();

const axiosInstance = axios.create({
  baseURL: "https://api.sms.ir/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "text/plain",
    "X-API-KEY":  "xued4IxpSunTLZktxnh2ep771G0XuzwsQcOaEZc6BpeQ9kfO"
,
  },
});

module.exports = axiosInstance;
