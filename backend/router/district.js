const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/district", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM district");
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

//get particular district

router.get("/district/:id", async (req, res) => {
    const DistrictId = req.params.id;
    try{
        (async()=> {
            const data = await query("SELECT * FROM district WHERE district_id = ?", DistrictId);
            const result = await data[0];
            console.log(result);
            return res.json(result);
        })()
    }catch(err){
        console.log(err);
        return res.status(400).json({error: err})
    }
})


router.post('/district', async (req, res) => {

    const {district_id, district_name} = req.body;
    console.log(district_id);
    console.log(district_name);
    // console.log(HOD);
    // console.log(students_enrolled);

        if(!district_id || !district_name){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM district WHERE district_id=?", [district_id]);
                    districtExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!districtExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO district VALUES(?,?)",[district_id, district_name]);
                          console.log(data[0]);
                          res.status(200).json({msg: "district added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "district already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });

router.delete("/district/:id", async (req, res) => {

    const districtid = req.params.id;
    console.log(districtid);
    try{

        (async()=>{
                const q = "Delete from district where district_id = ?"

                pool.query(q,[districtid],(err,data)=>{
                    if(err) return res.json(err);
                        
                    return res.json("district has been deleted");
                })
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
    
})

router.put("/district/:id", async(req, res) => {
    const DistrictId = req.params.id;
    console.log(DistrictId);
    try{
        (async()=>{
            const q = "UPDATE district SET `district_id` = ?, `district_name` = ? WHERE district_id = ?"
            const value = [
                req.body.district_id,
                req.body.district_name
            ]

            pool.query(q, [...value, DistrictId], (err, data)=>{
                if(err) return res.json(err);
                return res.json("District has been updated.");
            })
        })()
    }catch(err){
        console.log(err);
    }
});


module.exports = router;