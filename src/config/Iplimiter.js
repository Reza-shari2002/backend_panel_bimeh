const rateLimit = require("express-rate-limit");
const logger = require("../logger/logger");
const { message } = require("../validators/login_validate");

const ipLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 دقیقه
  max: 25, // حداکثر 10 درخواست
  message: "Too many requests from this IP",
  standardHeaders: true, // ارسال هدر استاندارد
  legacyHeaders: false, // غیر فعال کردن هدر قدیمی
    handler: (req, res, next, options) => {
    logger.error(429 , {ip:req.ip , message:"to many request"})
    res.status(429).json({
      message: "بیش از حد مجاز تلاش کرده اید کمی دیگر تلاش کنید" , status: "fail"
    });
  }
});

module.exports = ipLimiter;
