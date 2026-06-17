const AppError = require("../../config/AppErrore");

async function user_form_controller(req, res, next) {
  const form_data = req.user;
  

  const fileFildes = ["national_id_image_url","car_card_image_front_url","car_card_image_back_url","green_paper_image_url","prev_insurance_image_url","plate_history_image_url","endorsement_image_url","relationship_docs1_image_person1_url","relationship_docs2_image_person1_url","relationship_docs1_image_person2_url","relationship_docs2_image_person2_url"];

  for(let i = 0 ; i < fileFildes.length ; i++){
    if(form_data[fileFildes[i]]){
      form_data[fileFildes[i]] =   `${req.protocol}://${req.get("host")}/forms/view?path=${form_data[fileFildes[i]]}`;
    }
      }
      console.log(form_data)

      res.status(200).json({status:"success" , data:form_data});




 
}

module.exports = user_form_controller;
