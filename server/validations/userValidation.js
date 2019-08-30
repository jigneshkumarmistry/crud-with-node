import validator from '@hapi/joi';
const helper = require('../helper/helper');

// Define User chema
const userSchema = {
    firstName: validator.string().min(3).required(),
    lastName: validator.string().min(3).required(),
    email: validator.string().email({ minDomainSegments: 2 }),
    password: validator.string().min(3).required()
};

/**
 * validate User
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validateUser(req, res, next) {
    const {error} = validator.validate(req.body, userSchema, {abortEarly: false} );
    if (error) return res.status(422).json({status: 'failed', "error" : helper.formatError(error.details)});
    req.body = req.body;
    next();
}

export default {
    validateUser
}