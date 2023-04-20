const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/finalcoursesoffered", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM courses_offered WHERE final_offering=1");
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

// //get particular state

// router.get("/state/:id", async (req, res) => {
//     const stateId = req.params.id;
//     try{
//         (async()=> {
//             const data = await query("SELECT * FROM state_list WHERE state_id = ?", stateId);
//             const result = await data[0];
//             console.log(result);
//             return res.json(result);
//         })()
//     }catch(err){
//         console.log(err);
//         return res.status(400).json({error: err})
//     }
// })

// router.post('/FinalCoursesOffered', async (req, res) => {

//     const {cid, coursename, coursecode, final_offering} = req.body;
//     console.log(cid);
//     console.log(coursename);
//     // console.log(HOD);
//     // console.log(students_enrolled);

//         if(!cid || !coursename || !coursecode || !final_offering){
//             return res.status(422).json({error: ""});
//         }
    
//          try{
    
//             (async()=>{
//                 try{
//                     const data = await query("SELECT * FROM courses_offered WHERE final_offering=1");
//                     stateExists = await data[0];
//                 }
//                 finally{
//                     // pool.end();
//                 }
    
//                 if(!stateExists){            
//                     (async()=>{
//                         try{
    
//                           const data = await query("INSERT INTO courses_offered VALUES(?,?)",[state_id, state_name]);
//                           console.log(data[0]);
//                           res.status(200).json({msg: "state added successfully"})
//                         }
//                         finally{
                            
//                         } 
//                     })()
//                 }
//                 else{
//                     return res.status(422).json({error: "NO Course Exist"});
//                 }     
//            })()
//          }
//          catch(err) {
//              console.log(err);
//          }
//     });


module.exports = router;