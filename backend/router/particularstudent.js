const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);

//fetching data of particular student 
router.get("/particularstudent/:id", async (req,res)=> {

    const roll_no = req.params.id;

    try{

        (async()=>{
            
            const data = await query("SELECT roll_no,Branch FROM student_info where roll_no = ?", roll_no);
            const result = await data[0];
            console.log(result);
            return res.json(result);

            // return res.json(data);
            
            
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
})


//update the branch of particular student
router.put("/particularstudent/:id", async (req, res) => {

    const roll_no = req.params.id;
    console.log(roll_no);
    console.log(req.body.Branch)
    try{

        (async()=>{
                const q = "Update student_info set `Branch` = ? where roll_no = ?"

                const values = [
                    req.body.Branch
                ]

                pool.query(q,[...values,roll_no],(err,data)=>{
                    if(err) return res.json(err);
                        
                    return res.json("Branch of student has been changed succesfully");
                })
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
    
})

module.exports = router;