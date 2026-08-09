const filter_forms = require('../../services/filter_forms/filter_forms');
const { $_modify } = require('../../validators/filter_data_validate');


async function  filter_forms_controller(req,res,next) {
    try{
        const filteredRows = await filter_forms(req.body);
        res.status(200).json({data:filteredRows});

    }
    catch(err){
        return next(err);
    }
}


module.exports = filter_forms_controller