const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/structure", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM structure");
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


router.post('/structure', async (req, res) => {    

    const {strid,scheme_id,category,semester,branch_id,board_of_study,coursecode,coursename,lecture,tut,pract,ise1,ise2,ise3,PR,TW,ese,total_marks,total_credits} = req.body;
    
        if(!strid || !scheme_id || !category || !semester || !branch_id || !board_of_study || !coursecode || !coursename
            || !lecture || !tut || !pract || !ise1 || !ise2 || !ise3 || !PR || !TW || !ese || !total_marks || !total_credits){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM structure WHERE strid=?",[strid]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO structure VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                          [strid,scheme_id,category,semester,branch_id,board_of_study,coursecode,coursename,lecture,tut
                            ,pract,ise1,ise2,ise3,PR,TW,ese,total_marks,total_credits]);
                          console.log(data[0]);
                          res.status(200).json({msg: "Structure added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "Structure already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });


module.exports = router;