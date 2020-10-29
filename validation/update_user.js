const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateUserUpdate(data) {
    let errors = {};

    data.name = validText(data.name) ? data.name : '';
    if (Validator.isEmpty(data.name, { min: 2, max: 30 })) {
        errors.name = "Name must be between 2 and 30 characters";
    }

    // if (Validator.isEmpty(data.picture))
    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}