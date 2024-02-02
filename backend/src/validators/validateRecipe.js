const Joi = require("joi");

const getRecipeSchema = () => {
  return Joi.object({
    id: Joi.number().presence("optional"),
    title: Joi.string().max(80).presence("required"),
    picture: Joi.string().max(255).presence("required"),
    difficulty: Joi.string().max(30).presence("required"),
    prep_time: Joi.string().max(80).presence("required"),
    cooking_time: Joi.string().max(80).presence("required"),
    steps: Joi.number().presence("required"),
    user_id: Joi.number().presence("required"),
    cooking_tech_id: Joi.number().presence("required"),
    is_approved: Joi.number().presence("required"),
  });
};

const validateRecipe = (req, res, next) => {
  const schema = getRecipeSchema();

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

module.exports = validateRecipe;
