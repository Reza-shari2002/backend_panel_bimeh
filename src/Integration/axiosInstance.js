const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // یا هر پورتی که بک‌اندت هست
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

module.exports = axiosInstance;
