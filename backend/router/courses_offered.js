const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/courses_offered", async (req,res)=> {
    try{
 
        (async()=>{
            
            const data = await query("SELECT * FROM courses_offered");
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


router.post('/courses_offered', async (req, res) => {

    const {cid,coursename,coursecode,semester,prerequisite,final_offering,staff_id} = req.body;
    
        if(!cid|| !coursename || !coursecode || !semester || !prerequisite || !final_offering || !staff_id){
            return res.status(422).json({error: "Please insert all the fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM courses_offered WHERE coursecode=?",[coursecode]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO courses_offered VALUES(?,?,?,?,?,?,?)",[cid,coursename,coursecode,semester,prerequisite,final_offering,staff_id]);
                          console.log(data[0]);
                          res.status(200).json({msg: "Courses offered added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "Courses offered already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });


module.exports = router;