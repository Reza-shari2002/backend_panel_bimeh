const generateAccesstoken = require("../../services/token/Accesstoken");
const generateRefreshtoken = require("../../services/token/Refreshtoken");
const user_sessions_db = require("../../services/db/usersession");

const loginController = async (req, res, next) => {
  const AccessToken = generateAccesstoken(req.user);
  const RefreshToken = generateRefreshtoken(req.user);

  try {
    const { id } = req.user;
    const data = { user_id: id, refresh_token: RefreshToken };
    await user_sessions_db.revoke_sessions(id);
    await user_sessions_db.insert(data);

    res
      .status(200)
      .json({ access_token: AccessToken, refresh_token: RefreshToken });
  } catch (err) {
    res
      .status(err.statuscode || 500)
      .json({ message: err.message, status: err.status });
  }
};

module.exports = loginController;
