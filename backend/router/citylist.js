const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/city", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM city_list");
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


router.post('/city', async (req, res) => {

    const {city_id, city_name, isDistrict, state_id} = req.body;
    console.log(city_id);
    console.log(city_name);
    // console.log(HOD);
    // console.log(students_enrolled);

        if(!city_id || !city_name || !isDistrict || !state_id){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM city_list WHERE city_name=?",[city_name]);
                    cityExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!cityExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO city_list VALUES(?,?,?,?)",[city_id, city_name, isDistrict, state_id]);
                          console.log(data[0]);
                          res.status(200).json({msg: "city added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "city already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });

router.delete("/city/:id", async (req, res) => {

    const cityid = req.params.id;
    console.log(cityid);
    try{

        (async()=>{
                const q = "Delete from city_list where city_id = ?"

                pool.query(q,[cityid],(err,data)=>{
                    if(err) return res.json(err);
                        
                    return res.json("city has been deleted");
                })
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
    
})


module.exports = router;