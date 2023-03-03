const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);

//fetching data of particular student 
router.post("/courselist", async (req,res)=> {

    // const Degree = req.body.Degree;
    const Session = req.body.SessionID;
    const Branch = req.body.BranchID;
    const Semester = req.body.Semester;
    const Scheme = req.body.SchemeID;
    // const Admission_batch = req.body.Admission_batch;
    // console.log(Degree);
    console.log(Branch);
    console.log(Session);
    console.log(Semester);
    console.log(Scheme);

    try{

        (async()=>{
            const data = await query("SELECT strid,coursecode,coursename,total_credits,finally_offered FROM structure where branch_id = ? and semester= ? and mastersch_id = ? and session_id",[Branch, Semester, Scheme, Session]);
            const result = await data;
            console.log(data);
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
