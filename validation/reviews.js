const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEventInput(data) {
  let errors = {};

  data.rating = validText(data.rating) ? data.rating : '';
  data.description = validText(data.description) ? data.description : '';
 
  if (Validator.isEmpty(data.rating)) {
    errors.rating = 'Please select a rating for your experience.';
  }

  if (Validator.isEmpty(data.description, { min: 6, max: 120 })) {
    errors.description = 'Please give a short description about your playdate event.';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};