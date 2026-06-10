const jwt = require('jsonwebtoken');
require('dotenv').config();


function make_access_token(user) {
  return jwt.sign(
    {
      id: user.id,
      unit_id: user.unit_id,
      company_id: user.company_id,
      user_role: user.user_role,
      full_name:user.full_name
    },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "3d" },
  );
}

module.exports = make_access_token;

