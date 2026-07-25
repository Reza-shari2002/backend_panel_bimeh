const axios = require("axios");
require("dotenv").config();

// کلید کاوه نگار را از محیط برنامه دریافت می‌کنیم
const apiKey = process.env.KAVENEGAR_API_KEY;

const axiosInstancekavenager = axios.create({
  baseURL: `https://api.kavenegar.com/v1/${apiKey}/sms`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded", 
    Accept: "application/json",
  },
});

module.exports = axiosInstancekavenager;
