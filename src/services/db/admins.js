const db = require('../../config/db');
const  AppError = require('../../config/AppErrore');

async function  find_admin(user_name) {

    try{
        const query = 'select * from admins where user_name = ? ';
        const [data] = await db.query(query,[user_name]);
        return data;
    }
    catch(err){
        console.log(err.message)
        throw  new AppError( "server Error", 500);
    }
    
}



module.exports.find_admin = find_admin;


