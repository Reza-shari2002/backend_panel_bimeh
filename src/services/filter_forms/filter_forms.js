const db_forms = require('../../services/db/forms');

async function filter_forms(filter) {
    try{
        const allData = await db_forms.find_users_data();
        const filteredRows = allData.filter((item)=>{
            const  flag_phone = filter.phone?item.phone_number?.includes(filter.phone):true;
            const flage_fullName = filter.fullName?item.full_name?.includes(filter.fullName):true;

            return flag_phone && flage_fullName;
        })

        return filteredRows;
    }
    catch(err){
        throw err;
    }
}


module.exports = filter_forms;


