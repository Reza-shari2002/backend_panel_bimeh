
const AppError = require('../config/AppErrore');



    function array (req){
        const national_id_image_url = req?.files?.national_id_image_url?.[0];
        const car_card_image_front_url = req?.files?.car_card_image_front_url?.[0];
        const car_card_image_back_url = req?.files?.car_card_image_back_url?.[0];
        const green_paper_image_url = req?.files?.green_paper_image_url?.[0];
        const prev_insurance_image_url = req?.files?.prev_insurance_image_url?.[0];
        const plate_history_image_url = req?.files?.plate_history_image_url?.[0];
        const endorsement_image_url = req?.files?.endorsement_image_url?.[0];
        const relationship_docs1_image_person1_url = req?.files?.relationship_docs1_image_person1_url?.[0];
        const relationship_docs2_image_person1_url = req?.files?.relationship_docs2_image_person1_url?.[0];
        const relationship_docs1_image_person2_url = req?.files?.relationship_docs1_image_person2_url?.[0];
        const relationship_docs2_image_person2_url = req?.files?.relationship_docs2_image_person2_url?.[0];
        
        if(!national_id_image_url){
            console.log("national id image did not send")
            throw (new AppError("please send all document",400))
        }

        if((req.body.document_car_type === 0  && ( !car_card_image_back_url || !car_card_image_front_url )) || (req.body.document_car_type === 1 && (!green_paper_image_url))){
            console.log("car degree sned wrong");
            throw (new AppError("please send car degree" , 400));
        }
        
        if((req.body.has_discount_transfer === 1  &&  req.body.plate_history_type === 1  && ( !plate_history_image_url || !prev_insurance_image_url))  || (req.body.has_discount_transfer === 1 && req.body.plate_history_type === 0 && !prev_insurance_image_url)){
            console.log("degree of transfer discount is not completed");
            throw (new AppError("خواهشا تاریخچه پلاک را وارد کنید" ,400))
        }

        if(req.body.has_active_insurance_transfer === 1  && !endorsement_image_url ){
            console.log("endorsement_image_url did not send");
            throw (new AppError("الحاقیه حذف اخرین بیمه نامه الزامی میباشد" , 400))
        }

        if(req.body.is_relative_transfer === 1 && (!relationship_docs1_image_person1_url || !relationship_docs1_image_person2_url || !relationship_docs2_image_person1_url || !relationship_docs2_image_person2_url) ){
            console.log("relative degree did not send");
            throw(new AppError("مدارک نسبیتی را کامل بفرستید "))
        }


    
    }