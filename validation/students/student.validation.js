const {student} = require("./student.schema");

module.exports ={
    addstudentvalidation: async (req, res, next) =>{
        const value = await student.validate(req.body);
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