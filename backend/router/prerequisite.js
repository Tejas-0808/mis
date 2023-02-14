const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/prerequisite", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM prerequisite");
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


router.post('/prerequisite', async (req, res) => {

    const {prereq_id,coursename,req_subjects} = req.body;
    
        if(!prereq_id|| !coursename || !req_subjects){
            return res.status(422).json({error: "Please insert all the fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM prerequisite WHERE prereq_id=?",[prereq_id]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO prerequisite VALUES(?,?,?)",[prereq_id,coursename,req_subjects]);
                          console.log(data[0]);
                          res.status(200).json({msg: "Prerequisite Details added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "Prerequisite already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });


module.exports = router;