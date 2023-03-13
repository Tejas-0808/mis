const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);

//update assign
router.post('/offercourses', (req, res) => {
    const checkedValues = req.body.checkedValues;
    const newData = req.body.newData;
    console.log("running");
  console.log(newData+"23");
  console.log(checkedValues+"24");

    const query = `UPDATE structure SET finally_offered = ? WHERE coursecode IN (?)`;
    pool.query(query, [newData, checkedValues], (error, results) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error updating data');
      } else {
        res.send('Data updated successfully');
      }
    });
  });


  //to get students from 
//   router.post("/facultyrolllists", async (req,res)=> {

//     const Degree = req.body.Degree;
//     const Branch = req.body.Branch.slice(2);
//     const Semester = req.body.Semester;
//     const Batch = req.body.Batch;

//     try{

//         (async()=>{
            
//             const data = await query("SELECT roll_no,First_Name FROM student_info where Branch = ? and Semester= ? and Admission_batch = ?",[Branch,Semester,Batch]);
//             const result = await data;
//             // console.log(data);
//             return res.json(result);

//         })()
//     }
//     catch (err) {
//         console.log(err);
//         return res.status(400).json({error: err});
//     }
// })

  module.exports = router;