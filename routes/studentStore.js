const express = require ('express');
const router = express.Router();
const db = require('../db/db.js');
const { addstudentvalidation } = require("../validation/students/student.validation.js");
router.post("/students", addstudentvalidation, async (req, res)=>{
    const requestObj = req.body;
    try{
        const students = await db("students").insert({
            f_Name: requestObj.f_Name, 
            l_Name: requestObj.l_Name,
            email: requestObj.email,
            password: requestObj.password,
            ph_number: requestObj.ph_number
        });
        res.status(201).send(students);
    }catch (err){
        res.status(500).json({err:error});
    
    }

});
module.exports = router ;