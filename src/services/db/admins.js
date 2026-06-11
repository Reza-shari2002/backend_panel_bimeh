const db = require('../../config/db');
const  AppError = require('../../config/AppErrore');

async function  find_admin(user_name) {

    try{
        const query = 'select * from admins where user_name = ? ';
        const [data] = await db.query(query,[user_name]);
        return data;
    }
    catch(err){
        throw  new AppError(err.message , 500);
    }
    
}



module.exports = find_admin;


