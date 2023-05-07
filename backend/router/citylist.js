const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding city

router.get("/city", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM city_list");
            const result = await data;
            return res.json(result);
            
        })()
    }
    catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
})

//get particular religion

router.get("/city/:id", async (req, res) => {
    const cityId = req.params.id;
    try{
        (async()=> {
            const data = await query("SELECT * FROM city_list WHERE city_id = ?", cityId);
            const result = await data[0];
            console.log(result);
            return res.json(result);
        })()
    }catch(err){
        console.log(err);
        return res.status(400).json({error: err})
    }
})


router.post('/city', async (req, res) => {

    const {city_name, isDistrict, state_id} = req.body;
    console.log(city_name);
    console.log(isDistrict);
    console.log(state_id);
    // console.log(HOD);
    // console.log(students_enrolled);

        if( !city_name || !state_id){
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
    
                          const data = await query("INSERT INTO city_list (city_name, isDistrict, state_id) VALUES(?,?,?)",[ city_name, isDistrict, state_id]);
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

router.put("/city/:id", async(req, res) => {
    const cityId = req.params.id;
    console.log(cityId);
    try{
        (async()=>{
            const q = "UPDATE city_list SET `city_id` = ?, `city_name` = ?, `isDistrict` = ?, `state_id` = ?  WHERE city_id = ?"
            const value = [
                req.body.city_id,
                req.body.city_name,
                req.body.isDistrict,
                req.body.state_id
            ]

            pool.query(q, [...value, cityId], (err, data)=>{
                if(err) return res.json(err);
                return res.json("City has been updated.");
            })
        })()
    }catch(err){
        console.log(err);
    }
});

module.exports = router;