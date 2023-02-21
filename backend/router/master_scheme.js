const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/master_scheme", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM master_scheme");
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


router.post("/master_scheme", async (req, res) => {

    const {mastersch_id, master_scheme, from_year, to_year} = req.body;
    
        if(!mastersch_id || !master_scheme || !from_year || !to_year){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM master_scheme WHERE mastersch_id=?",[mastersch_id]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){   
                           
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO master_scheme VALUES(?,?,?,?)",[mastersch_id, master_scheme, from_year, to_year ]);
                          console.log(data[0]);
                          res.status(200).json({msg: "Scheme added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "Scheme already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });

    router.delete("/master_scheme/:id", async (req, res) => {

        const masterschemeid = req.params.id;
        console.log(masterschemeid);
        try{
      
            (async()=>{
                    const q = "Delete from master_scheme where mastersch_id = ?"
      
                    pool.query(q,[masterschemeid],(err,data)=>{
                        if(err) return res.json(err);
                            
                        return res.json("Master Scheme has been deleted");
                    })
            })()
        }
        catch (err) {
            console.log(err);
            return res.status(400).json({error: err});
        }
        
      })
      

module.exports = router;