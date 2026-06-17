const axios = require("axios");
require("dotenv").config();




const verifyCaptcha = async (req, res, next) => {
  try {
    
    const token = req.headers["x-captcha-token"];

  
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "لطفاً تایید کنید که ربات نیستید (توکن کپچا یافت نشد)",
      });
    }

 
    const response = await axios.post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        secret: process.env.TURNSTILE_SECRET_KEY, 
        response: token,
        remoteip: req.ip, 
      }
    );

    const data = response.data;

    
    if (data.success) {
      
      return next();
    } else {
      
      return res.status(403).json({
        success: false,
        message: "تاییدیه امنیتی (کپچا) نامعتبر است. لطفاً دوباره تلاش کنید.",
        errors: data["error-codes"], 
      });
    }
  } catch (error) {
  
    console.error("Turnstile Error:", error);
    return res.status(500).json({
      success: false,
      message: "خطا در برقراری ارتباط با سرویس امنیت. لطفاً لحظاتی دیگر تلاش کنید.",
    });
  }
};

module.exports = verifyCaptcha;
