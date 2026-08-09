const db = require('../../config/db')
const db_forms = require('../db/forms')

async function Finde_page_number(per_page) {
    try{
            const total_forms = await db_forms.find_records_number();
            
            const pageCount = Math.max(1,Math.ceil(total_forms/per_page));
            return pageCount;
    }
    catch(err){
 throw(err);
    }
}


module.exports = Finde_page_number;