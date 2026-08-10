const filter_forms = require('../../services/filter_forms/filter_forms');
const { $_modify } = require('../../validators/filter_data_validate');


async function  filter_forms_controller(req,res,next) {
    try{
        const data = await filter_forms(req.filter);
        res.status(200).json({data:data.data , page_count:data.page_count});
        console.log(data)

    }
    catch(err){
        return next(err);
    }
}


module.exports = filter_forms_controller