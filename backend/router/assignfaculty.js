const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);

//update assign
router.post('/assignfaculty', (req, res) => {
    const checkedValues = req.body.checkedValues;
    const newData = req.body.newData;
  console.log(newData);
  console.log(checkedValues+'checj');

    const query = `UPDATE student_info SET faculty_adv_id = ? WHERE roll_no IN (?)`;
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
  router.post("/studentrolllists", async (req,res)=> {

    const Degree = req.body.Degree;
    const Branch = req.body.Branch.slice(2);
    const Semester = req.body.Semester;
    const Batch = req.body.Batch;

    try{

        (async()=>{
            const data = await query ("SELECT roll_no, First_Name, Middle_Name, Last_Name, Branch, (SELECT CONCAT(sd.First_Name, ' ', sd.Last_Name) FROM staff_details AS sd WHERE sd.staffID = student_info.faculty_adv_id)  AS 'FA Name' FROM student_info WHERE Degree = ? AND Branch = ? AND Semester = ? AND Admission_batch = ? ", [Degree, Branch,Semester,Batch]);
            const result = await data;
       
            console.log(result);
            return res.json(result);

        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
})

  module.exports = router;