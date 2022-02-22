const Joi = require("joi");

const schemaCreateContact = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    "any.required": "Поле name обязательно",
    "string.empty": "Поле name не может быть пустым ",
  }),

  phone: Joi.string()
    .pattern(/[0-9]+/)
    .required(),

  email: Joi.string().email(),
});
module.exports = { schemaCreateContact };
