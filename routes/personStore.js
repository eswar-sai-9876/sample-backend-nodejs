const express = require("express");
const router = express.Router();
const db = require("../db/db.js");
const { addpersonvalidation } = require("../validation/persons/person.validation.js");
router.get("/persons", async (req , res)=>{
    try{
        const persons = await db("persons");
        console.log(persons);
        res.json(persons);
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal server is error');
    }
});

router.post("/addpersons",addpersonvalidation, async (req , res)=>{
    const {F_name, L_name, Email, password, phone_number} = req.body;
    try{
        const persons =await db("persons").insert({F_name, L_name, Email, password, phone_number});
        res.status(201).send(persons);
    }catch (error) {
        res.status(500).json({err:error});
    }
});
module.exports = router ;