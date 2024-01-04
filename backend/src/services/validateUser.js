/* eslint-disable camelcase */
const Joi = require("joi");

const userSchema = Joi.object({
  username: Joi.string().max(80).required(),
  email: Joi.string().email().max(255).required(),
  password: Joi.string().max(80).required(),
  role_id: Joi.number().integer().required(),
});

const validateUser = (req, res, next) => {
  const { username, email, password, role_id } = req.body;

  const { error } = userSchema.validate({
    username,
    email,
    password,
    role_id,
  });

  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    next();
  }
};

module.exports = { validateUser };
