const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/state", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM state_list");
            const result = await data;
            console.log(result+"1");
            return res.json(result);

            // return res.json(data);
            
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
})


router.post('/state', async (req, res) => {

    const {state_id, state_name} = req.body;
    console.log(state_id);
    console.log(state_name);
    // console.log(HOD);
    // console.log(students_enrolled);

        if(!state_id || !state_name){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM state_list WHERE state_name=?",[state_name]);
                    stateExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!stateExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO state_list VALUES(?,?)",[state_id, state_name]);
                          console.log(data[0]);
                          res.status(200).json({msg: "state added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "state already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });

router.delete("/state/:id", async (req, res) => {

    const stateid = req.params.id;
    console.log(stateid);
    try{

        (async()=>{
                const q = "Delete from state_list where state_id = ?"

                pool.query(q,[stateid],(err,data)=>{
                    if(err) return res.json(err);
                        
                    return res.json("state has been deleted");
                })
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
    
})


module.exports = router;