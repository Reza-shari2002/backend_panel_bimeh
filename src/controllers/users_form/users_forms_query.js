const Car_insurance_query_row = require('../../services/page_query/Car_insurance_query_row');

async function  users_form_query_controller(req,res,next) {
    try{
        const {data , page_count} =  await Car_insurance_query_row(req.validatedQuery);
        res.status(200).json({data:data , page_count:page_count});
    }
    catch(err){
        next(err);
    }
}


module.exports = users_form_query_controller;