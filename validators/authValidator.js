const Joi = require('joi');

// Validation schema for user registration
const validateRegister = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(2).max(30).required(),
    lastName: Joi.string().min(2).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(30).required(),
    phoneNumber: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .required()
      .messages({ 'string.pattern.base': 'Phone number must be between 10 and 15 digits.' }),
    institution: Joi.string().min(2).max(100).required(),
  });

  return schema.validate(data);
};

module.exports = { validateRegister };
