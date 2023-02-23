const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/religion", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM religion");
            const result = await data;
            console.log(result);
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

//get particular religion

router.get("/religion/:id", async (req, res) => {
    const ReligionId = req.params.id;
    try{
        (async()=> {
            const data = await query("SELECT * FROM religion WHERE religion_id = ?", ReligionId);
            const result = await data[0];
            console.log(result);
            return res.json(result);
        })()
    }catch(err){
        console.log(err);
        return res.status(400).json({error: err})
    }
})

router.post('/religion', async (req, res) => {

    const {religion_id, Religion_name} = req.body;
    console.log(religion_id);
    console.log(Religion_name);
    // console.log(HOD);
    // console.log(students_enrolled);

        if(!religion_id || !Religion_name){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM religion WHERE Religion_name=?",[Religion_name]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO religion VALUES(?,?)",[religion_id, Religion_name ]);
                          console.log(data[0]);
                          res.status(200).json({msg: "Religion added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "Religion already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });

router.delete("/religion/:id", async (req, res) => {

    const religionid = req.params.id;
    console.log(religionid);
    try{

        (async()=>{
                const q = "Delete from religion where religion_id = ?"

                pool.query(q,[religionid],(err,data)=>{
                    if(err) return res.json(err);
                        
                    return res.json("religion has been deleted");
                })
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
    
})

router.put("/religion/:id", async(req, res) => {
    const religionId = req.params.id;
    console.log(religionId);
    try{
        (async()=>{
            const q = "UPDATE religion SET `religion_id` = ?, `Religion_name` = ? WHERE religion_id = ?"
            const value = [
                req.body.religion_id,
                req.body.Religion_name
            ]

            pool.query(q, [...value, religionId], (err, data)=>{
                if(err) return res.json(err);
                return res.json("Religion has been updated.");
            })
        })()
    }catch(err){
        console.log(err);
    }
});


module.exports = router;