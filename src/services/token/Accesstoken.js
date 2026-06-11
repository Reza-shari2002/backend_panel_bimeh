const jwt = require('jsonwebtoken');
require('dotenv').config();


function make_access_token(user) {

 console.log("REza.sjsj")
  return jwt.sign(
    {
      id: user.id,
      phone: user.phone,
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" },
  );
}

module.exports = make_access_token;

