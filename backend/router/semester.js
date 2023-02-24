const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding semester

router.get("/semester", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM semester");
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

router.get("/semester/:id", async (req, res) => {
    const semesterId = req.params.id;
    try{
        (async()=> {
            const data = await query("SELECT * FROM semester WHERE sem_id = ?", semesterId);
            const result = await data[0];
            console.log(result);
            return res.json(result);
        })()
    }catch(err){
        console.log(err);
        return res.status(400).json({error: err})
    }
})

router.post('/semester', async (req, res) => {

    const {sem_id, sem} = req.body;
    console.log(sem_id);
    console.log(sem);
    // console.log(HOD);
    // console.log(students_enrolled);

        if(!sem_id || !sem){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM semester WHERE sem_id=?",[sem_id]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO semester VALUES(?,?)",[sem_id, sem]);
                          console.log(data[0]);
                          res.status(200).json({msg: "semester added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "semester already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });

router.delete("/semester/:id", async (req, res) => {

    const semID = req.params.id;
    console.log(semID);
    try{

        (async()=>{
                const q = "Delete from semester where sem_id = ?"

                pool.query(q,[semID],(err,data)=>{
                    if(err) return res.json(err);
                        
                    return res.json("semester has been deleted");
                })
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
    
});




module.exports = router;