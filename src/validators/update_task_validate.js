const joi = require("joi");

const update_task_validate = joi.object({
  workflow_stages: joi
    .array()
    .items(
      joi.object({
        title: joi.string().min(3).required(),
        unit_id: joi.number().required(),
        unit_name: joi.string().required(),
      }),
    ),
  current_workflow_index: joi.number().required(),
});


module.exports = update_task_validate;