const bcrypt = require("bcrypt");
const appError = require('../../config/AppErrore');
const users_db = require('../../services/db/users');

 const check = async (req, res, next) => {
  const { user_name, password } = req.body.user_info;
  try {
   
    const data = await users_db.findUser(user_name);

    if (data.length === 0) {
      return next(new appError("نام کاربری یا رمز عبور اشتباه است.", 401)); // استفاده از 401 بهتر است
    }

    const user = data[0];
    const isPasswordMatch = await bcrypt.compare(password, user.password); // فرض کنید ستون پسورد در دیتابیس 'password' نام دارد

    if (!isPasswordMatch) {
      return next(new appError("نام کاربری یا رمز عبور اشتباه است.", 401));
    }

    delete user.password;
    req.user = user;
    next();
  } catch (err) {
    next(new appError('server Error', 500));
  }
}

module.exports = check;
