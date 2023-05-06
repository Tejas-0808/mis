const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);

router.post('/assignbatch', (req, res) => {
    const { checkedValues, Faculty, Batch, Course } = req.body;
  
    (async () => {
        try {
      const values = checkedValues.map((studentId) => [studentId, Course, Batch, Faculty]);

          const data = await query("INSERT INTO batch_allotment (Reg_Id, coursecode, batch_name, faculty) VALUES ?", [
           values
          ]);
          console.log(data[0]);
          res.status(200).json({ msg: "Branch added successfully" });
        } finally {
        }
      })();
    // Use the connection pool to execute a database query
    // pool.getConnection((error, connection) => {
    //   if (error) {
    //     console.error(error);
    //     res.status(500).send('Internal server error');
    //     return;
    //   }
  
      // Insert the course roster data into the database
    //   const sql = "INSERT INTO batch_allotment (Reg_Id, coursecode, batch_name, faculty) VALUES(?,?,?,?)";
    //   const values = checkedValues.map((studentId) => [studentId, Course, Batch, Faculty]);
     
    // const sql = "INSERT INTO batch_allotment (Reg_Id, coursecode, batch_name, faculty) VALUES (?, ?, ?, ?)";
    // const values = checkedValues.map((id) => [id, Course, Batch, Faculty]);

    // connection.query(sql, [values], (error, results) => {
    //   if (error) {
    //     console.error(error);
    //     throw error;
    //   }

    //   console.log(`${results.affectedRows} rows inserted into batch_allotment table.`);
    //   });
    // });
  });
  

// router.post('/assignbatch', (req, res) => {
//     const checkedValues = req.body.checkedValues;
//     const newData = req.body.newData;
//   console.log(newData);
//   console.log(checkedValues);

//     const query = `INSERT INTO batch_allotment (Reg_Id, coursecode, batch_name, faculty) VALUES (?, ?, ?, ?);`;
//     // const query = `UPDATE student_info SET faculty_adv_id = ? WHERE roll_no IN (?)`;

//     pool.query(query, [newData, checkedValues], (error, results) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send('Error inserting data');
//       } else {
//         res.send('Data inserted successfully');
//       }
//     });
//   });

//   router.post("/assignbatch", async (req, res) => {
//     const { Reg_Id, coursecode, batch_name, faculty } = req.body;

  
//     // if (!Branch_id || !Branch_name || !HOD || !Students_enrolled) {
//     //   return res.status(422).json({ error: "plz fill all fields properly" });
//     // }
  
//     try {
//       (async () => {
//         // try {
//         //   const data = await query("SELECT * FROM branch WHERE Branch_name=?", [
//         //     Branch_name,
//         //   ]);
//         //   userExists = await data[0];
//         // } finally {
//         //   // pool.end();
//         // }
  
//         if (true) {
//           (async () => {
//             try {
//               const data = await query("INSERT INTO batch_allotment (Reg_Id, coursecode, batch_name, faculty) VALUES(?,?,?,?)", [
//                 Reg_Id, coursecode, batch_name, faculty,
//               ]);
//               console.log(data[0]);
//               res.status(200).json({ msg: "students added successfully" });
//             } finally {
//             }
//           })();
//         } else {
//           return res.status(422).json({ error: "Branch already exists" });
//         }
//       })();
//     } catch (err) {
//       console.log(err);
//     }
//   });

router.post("/studentrolllists", async (req,res)=> {

    const Degree = req.body.Degree;
    const Branch = req.body.Branch.slice(2);
    const Semester = req.body.Semester;
    const Batch = req.body.Batch;

    try{

        (async()=>{
            // const data = await query ("SELECT roll_no, First_Name, Middle_Name, Last_Name, Branch, (SELECT CONCAT(sd.First_Name, ' ', sd.Last_Name) FROM staff_details AS sd WHERE sd.staffID = student_info.faculty_adv_id)  AS 'FA Name' FROM student_info WHERE Degree = ? AND Branch = ? AND Semester = ? AND Admission_batch = ? ", [Degree, Branch,Semester,Batch]);
            const data = await query ("SELECT Reg_id , batch_name FROM batch_allotment AS sd WHERE sd.Reg_id = courses_taken_stud.roll_no)  AS 'FA Name' FROM courses_taken_stud WHERE JSON_CONTAINS(courses,  JSON_ARRAY(?))", [Degree, Branch,Semester,Batch]);
          
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
