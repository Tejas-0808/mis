const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/course_category", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM course_category");
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

//get particular religion

router.get("/course_category/:id", async (req, res) => {
    const CoursecatId = req.params.id;
    try{
        (async()=> {
            const data = await query("SELECT * FROM course_category WHERE course_id = ?", CoursecatId);
            const result = await data[0];
            console.log(result);
            return res.json(result);
        })()
    }catch(err){
        console.log(err);
        return res.status(400).json({error: err})
    }
})


router.post("/course_category", async (req, res) => {

    const {course_id, name, code} = req.body;
    
        if(!course_id || !name || !code){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM course_category WHERE course_id=?",[course_id]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){   
                           
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO course_category VALUES(?,?,?)",[course_id, name, code ]);
                          console.log(data[0]);
                          res.status(200).json({msg: "Course Category added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "Course Category already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });

    router.delete("/course_category/:id", async (req, res) => {

        const CoursecatId = req.params.id;
        console.log(CoursecatId);
        try{
      
            (async()=>{
                    const q = "Delete from course_category where course_id = ?"
      
                    pool.query(q,[CoursecatId],(err,data)=>{
                        if(err) return res.json(err);
                            
                        return res.json("Course category Scheme has been deleted");
                    })
            })()
        }
        catch (err) {
            console.log(err);
            return res.status(400).json({error: err});
        }
        
      })
      
      router.put("/masterscheme/:id", async(req, res) => {
        const CoursecatId = req.params.id;
        console.log(CoursecatId);
        try{
            (async()=>{
                const q = "UPDATE course_category SET `course_id` = ?, `name` = ?, `code` = ? WHERE course_id = ?"
                const value = [
                    req.body.course_id,
                    req.body.name,
                    req.body.code
                ]
    
                pool.query(q, [...value, CoursecatId], (err, data)=>{
                    if(err) return res.json(err);
                    return res.json("Course Category has been updated.");
                })
            })()
        }catch(err){
            console.log(err);
        }
    });

module.exports = router;