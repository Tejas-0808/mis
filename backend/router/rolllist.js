const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);

//fetching data of particular student 
router.post("/rolllist", async (req,res)=> {

    const Degree = req.body.Degree;
    const Branch = req.body.Branch;
    const Semester = req.body.Semester;
    const Batch = req.body.Batch;
    console.log(Degree);
    console.log(Branch);
    console.log(Semester);
    console.log(Batch);

    try{

        (async()=>{
            
            const data = await query("SELECT roll_no,First_Name FROM student_info where Branch = ? and Semester= ? and Admission_batch = ?",[Branch,Semester,Batch]);
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


//update the branch of particular student
// router.put("/particularstudent/:id", async (req, res) => {

//     try{

//         (async()=>{
//                 const q = "Update student_info set `Branch` = ? where roll_no = ?"

//                 const values = [
//                     req.body.Branch
//                 ]

//                 pool.query(q,[...values,roll_no],(err,data)=>{
//                     if(err) return res.json(err);
                        
//                     return res.json("Branch of student has been changed succesfully");
//                 })
//         })()
//     }
//     catch (err) {
//         console.log(err);
//         return res.status(400).json({error: err});
//     }
    
// })

module.exports = router;