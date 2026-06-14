const Joi = require("joi");

const create_task_validate = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(3).required(),
  status: Joi.string()
    .valid("in_progress", "completed", "rejected")
    .default("in_progress")
    .required(),
  priority: Joi.string().valid("emergency", "ordinary").required(),
  workflow_stages: Joi.array()
    .items(
      Joi.object({
        unit_id: Joi.number().required(),
        title: Joi.string().required(),
        unit_name: Joi.string().required(),
      }),
    )
    .required(),
});

module.exports = create_task_validate;
