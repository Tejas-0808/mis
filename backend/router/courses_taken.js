const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);


router.get("/courses_taken", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM courses_taken");
            const result = await data;
            return res.json(result);

            // return res.json(data);
            console.log(result);
            
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
})


router.post('/courses_taken', async (req, res) => {

    const {serial_no, roll_no, CORE, HS, ELECTIVES} = req.body;
    // const {cid,coursename,coursecode,semester,prerequisite,final_offering,staff_id} = req.body;
    
        // if(!serial_no|| !roll_no || !CORE || !HS || !ELECTIVES ){
        //     return res.status(422).json({error: "Please insert all the fields properly"});
        // }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM courses_taken WHERE serial_no=?",[serial_no]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){            
                    (async()=>{
                        try{

                          const d = JSON.stringify({
                            CORE : CORE,
                            HS : HS,
                            ELECTIVES : ELECTIVES
                          })
    
                          const data = await query("INSERT INTO courses_taken VALUES(?,?,?)",[serial_no, roll_no, d]);
                          console.log(data[0]);
                          res.status(200).json({msg: "Courses taken added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "student already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });


module.exports = router;