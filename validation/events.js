const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEventInput(data) {
  let errors = {};

  data.location = validText(data.location) ? data.location : '';
  data.description = validText(data.description) ? data.description : '';
  data.time = validText(data.time) ? data.time : '';
 
  if (Validator.isEmpty(data.location)) {
    errors.location = 'Please pick a location to host your playdate.';
  }

  if (Validator.isEmpty(data.description, { min: 6, max: 120 })) {
    errors.description = 'Please give a short description about your playdate event.';
  }

  if (Validator.isEmpty(data.time)) {
    errors.time = 'Please pick a time for your playdate event.';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};