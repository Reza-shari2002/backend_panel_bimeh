const rateLimit = require("express-rate-limit");

const ipLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 دقیقه
  max: 10, // حداکثر 10 درخواست
  message: "Too many requests from this IP",
  standardHeaders: true, // ارسال هدر استاندارد
  legacyHeaders: false, // غیر فعال کردن هدر قدیمی
});

module.exports = ipLimiter;
