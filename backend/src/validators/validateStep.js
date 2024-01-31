const Joi = require("joi");

const getStepSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    step_1: Joi.string().presence('required'),
   step_2: Joi.string().presence('optional'),
   step_3: Joi.string().presence('optional'),
   step_4: Joi.string().presence('optional'),
   step_5: Joi.string().presence('optional'),
   step_6: Joi.string().presence('required'),
   step_7: Joi.string().presence('optional'),
   step_8: Joi.string().presence('optional'),
   step_9: Joi.string().presence('optional'),
   step_10: Joi.string().presence('optional'),

  });
};

const validateStep = (req, res, next) => {
  const schema = getStepSchema();

  const { error } = schema.validate(
    {
      ...req.body,
    },
    { abortEarly: false }
  );

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = validateStep;

