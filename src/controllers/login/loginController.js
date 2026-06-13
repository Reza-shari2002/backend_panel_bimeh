const generateAccesstoken = require("../../services/token/Accesstoken");
const user_sessions_db = require("../../services/db/usersession");

const loginController = async (req, res, next) => {
  
  const AccessToken = generateAccesstoken(req.user);

  try {
    const { id } = req.user;
    const data = { admin_id: id };
   
    await user_sessions_db.insert(data);

    res
      .status(200)
      .json({ access_token: AccessToken });
  } catch (err) {
    res
      .status(err.statuscode || 500)
      .json({ message: err.message, status: err.status });
  }
};

module.exports = loginController;
