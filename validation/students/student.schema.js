const joi = require ("@hapi/joi");
const studentSchema ={
    student : joi.object({
        f_Name: joi.string().max(100).required(),
        l_Name: joi.string().max(100).required(),
        email: joi.string().email().required(),
        password: joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).message('Invalid Password'),
        ph_number: joi.string().pattern(new RegExp("^(\\+91)+[0-9]{10}$")).message('invalid number').required()

    })
};
module.exports = studentSchema;
    
