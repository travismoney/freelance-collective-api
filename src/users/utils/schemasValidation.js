const Joi = require('@hapi/joi');

const schemas = {
  insertUser: Joi.object().keys({
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    location: Joi.string().required(),
    skillsets: Joi.array().items(Joi.string()).required(),
    hobbies: Joi.array().items(Joi.string()).required(),
    linkedInUrl: Joi.string().allow('').optional()
  }),
  updateUser: Joi.object().keys({
    username: Joi.string().min(3).max(20).required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    location: Joi.string().required(),
    skillsets: Joi.array().items(Joi.string()).required(),
    hobbies: Joi.array().items(Joi.string()).required(),
    linkedInUrl: Joi.string().allow('').optional()
  }),
};

module.exports = schemas;
