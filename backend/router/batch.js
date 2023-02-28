const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/batch", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM batch");
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

router.get("/batch/:id", async (req, res) => {
    const BatchId = req.params.id;
    try{
        (async()=> {
            const data = await query("SELECT * FROM batch WHERE batch_id = ?", BatchId);
            const result = await data[0];
            console.log(result);
            return res.json(result);
        })()
    }catch(err){
        console.log(err);
        return res.status(400).json({error: err})
    }
})

router.post('/batch', async (req, res) => {

    const {batch_id, year} = req.body;
    console.log(batch_id);
    console.log(year);
    // console.log(HOD);
    // console.log(students_enrolled);

        if(!batch_id || !year){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM batch WHERE batch_id=?",[batch_id]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO batch VALUES(?,?)",[batch_id, year]);
                          console.log(data[0]);
                          res.status(200).json({msg: "batch added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "batch already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });

router.delete("/batch/:id", async (req, res) => {

    const BatchId = req.params.id;
    console.log(BatchId);
    try{

        (async()=>{
                const q = "Delete from batch where batch_id = ?"

                pool.query(q,[BatchId],(err,data)=>{
                    if(err) return res.json(err);
                        
                    return res.json("batch has been deleted");
                })
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
    
});

router.put("/batch/:id", async(req, res) => {
    const BatchId = req.params.id;
    console.log(BatchId);
    try{
        (async()=>{
            const q = "UPDATE batch SET `batch_id` = ?, `year` = ? WHERE batch_id = ?"
            const value = [
                req.body.batch_id,
                req.body.year
            ]

            pool.query(q, [...value, BatchId], (err, data)=>{
                if(err) return res.json(err);
                return res.json("Batch has been updated.");
            })
        })()
    }catch(err){
        console.log(err);
    }
});


module.exports = router;