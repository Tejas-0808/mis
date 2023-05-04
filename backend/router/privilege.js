const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);
const verifyToken = require("./verifyToken");

 
//adding branch

router.get("/privilege",verifyToken, async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM privilege");
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


router.post('/privilege',verifyToken,  async (req, res) => {

    const {role_id,role} = req.body;
    
        if(!role_id || !role ){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM privilege WHERE role_id=?",[role_id]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO privilege VALUES(?,?)",[role_id,role ]);
                          console.log(data[0]);
                          res.status(200).json({msg: "privilege added successfully"})
                        }
                        finally{
                             
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "privilege already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });


module.exports = router;