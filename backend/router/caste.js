const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/caste", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM caste_list");
            const result = await data;
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


router.post('/caste', async (req, res) => {

    const {caste_id, caste_name} = req.body;
    console.log(caste_id);
    console.log(caste_name);
    // console.log(HOD);
    // console.log(students_enrolled);

        if(!caste_id || !caste_name){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM caste_list WHERE caste_name=?",[caste_name]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO caste_list VALUES(?,?)",[caste_id, caste_name ]);
                          console.log(data[0]);
                          res.status(200).json({msg: "caste added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "caste already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });

router.delete("/caste/:id", async (req, res) => {

    const casteid = req.params.id;
    console.log(casteid);
    try{

        (async()=>{
                const q = "Delete from caste_list where caste_id = ?"

                pool.query(q,[casteid],(err,data)=>{
                    if(err) return res.json(err);
                        
                    return res.json("caste has been deleted");
                })
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
    
});

router.put("/caste/:id", async(req, res) => {
    const casteId = req.params.id;
    console.log(casteId);
    try{
        (async()=>{
            const q = "UPDATE caste_list SET `caste_id` = ?, `caste_name` = ? WHERE caste_id = ?"
            const value = [
                req.body.caste_id,
                req.body.caste_name
            ]

            pool.query(q, [...value, casteId], (err, data)=>{
                if(err) return res.json(err);
                return res.json("Caste has been updated.");
            })
        })()
    }catch(err){
        console.log(err);
    }
});


module.exports = router;