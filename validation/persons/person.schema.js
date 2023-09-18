const joi = require ('@hapi/joi'); 
const { error } = require('@hapi/joi/lib/base');
const passwordCheck = function(password)
{
    const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "@!*&%$?#";
    const minLength = 8;

    if(password.length < minLength) {
        return false;
    }

    const Counts = {
        lowerAlpha: 0,
        upperAlpha:0,
        number:0,
        specialChars:0
    }
    for(let i=0; i< password.length ; i++)
    {
        let e = password[i];
        if(alphabets.includes(e))
        {
            Counts.upperAlpha++;
        }
        else if(alphabets.toLowerCase().includes(e))
        {
            Counts.lowerAlpha++;
        }
        else if(numbers.includes(e))
        {
            Counts.number++;
        }
        else if(specialChars.includes(e))
        {
            Counts.specialChars++;
        }
        else {
            return false;
        }

    }
    if(Counts.lowerAlpha >= 3  && Counts.upperAlpha >= 1 && Counts.number >= 2 && Counts.specialChars >= 2)
    {
        return true;
    }
    return false;
}
const personsSchema = {
    person : joi.object({
        F_name: joi.string().max(100).required(),
        L_name: joi.string().max(100).required(),
        Email: joi.string().email().required(),
        password: joi.string().custom((password,helpers) => { 
            const isValid = passwordCheck(password);
            if(!isValid) throw error();
            return password;
        }).message('Invalid password'),
        phone_number: joi.string().pattern(new RegExp("^(\\+91)+[0-9]{10}$")).message('invalid number').required()

    })
};
module.exports = personsSchema;



