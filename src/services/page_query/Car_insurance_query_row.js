const Finde_page_number = require('./Finde_page_number');
const db_forms = require('../db/forms');


async function Car_insurance_query_row (query){
    try{
        const page_count = await Finde_page_number(query.limit);
        const offset = (query.page - 1 ) * query.limit;
        const limit = query.limit;
        const data = await db_forms.finde_query_record(limit,offset);
        return {data:data , page_count:page_count};

    }
    catch(err){
        throw err;
    }


}

module.exports = Car_insurance_query_row;