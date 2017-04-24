const Joi               = require('joi');

module.exports = {
  validateParams: validateParams
};

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    email: Joi.string().email(),
    id: Joi.string().alphanum(),
    userId: Joi.string().alphanum(),
    postId: Joi.string().alphanum(),
    albumId: Joi.string().alphanum(),
    body: Joi.string(),
    title: Joi.string()
});

// Return result.
const result = Joi.validate({ username: 'abc' }, schema);

function validateParams(req, res, next) {
  var qKeys = Object.getOwnPropertyNames(req.query);
  var bKeys = Object.getOwnPropertyNames(req.body);

  if (validateCycle(req.query, qKeys) && validateCycle(req.body, bKeys)) {
    next();
  } else {
    next(false);
  }
}

function validateCycle(params, keys) {
  for (var i = 0; keys[i]; i++) {
    // Return result.
    const key = keys[i];
    const validate = {};
    validate[key] = params[keys[i]];
    const result = Joi.validate(validate, schema);
    if (result.error) return false;
  }
  return true;
}