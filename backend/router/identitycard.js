const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);

//fetching data of particular student 
router.post("/identitycard", async (req,res)=> {

    const Degree = req.body.Degree;
    const Branch = req.body.Branch;
    const Admission_batch = req.body.admission_batch;
    console.log(Degree);
    console.log(Branch);
    console.log(Admission_batch);

    try{

        (async()=>{
            
            const data = await query("SELECT roll_no, First_Name FROM student_info where Branch = ? and Admission_batch = ?",[Branch,Admission_batch]);
            const result = await data;
            // console.log(data);
            return res.json(result);

        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
})

module.exports = router;