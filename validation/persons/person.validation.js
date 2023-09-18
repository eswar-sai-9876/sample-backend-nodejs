const {person} = require("./person.schema");

module.exports ={
    addpersonvalidation: async (req, res, next) =>{
        const value = await person.validate(req.body);
        if(value.error){
            res.json({
                success:0,
                Message: value.error.details[0].message
            })
        }else{
            next();
        }
    },
    
}