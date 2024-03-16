/* eslint-disable camelcase */
const Joi = require("joi");

const userSchema = Joi.object({
  id: Joi.number().presence("optional"),
  username: Joi.string().max(80).required(),
  email: Joi.string().email().max(255).required(),
  password: Joi.string().max(255).required(),
  is_admin: Joi.number().required(),
});

const validateUser = (req, res, next) => {
  const { error } = userSchema.validate(
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

module.exports = { validateUser };
