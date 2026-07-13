const axios = require("axios");
require("dotenv").config();

const axiosInstance = axios.create({
  baseURL: "https://api.sms.ir/v1",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "text/plain",
    "X-API-KEY": process.env.SMS_IR_API_KEY,
  },
});

module.exports = axiosInstance;
