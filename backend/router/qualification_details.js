const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/qualification_details", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM qualification_details");
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


router.post('/qualification_details', async (req, res) => {

    //const {Reg_Id, Custom_Id, Exam_type, Month_of_Passing,Year_of_exam,Board,School/college_name,Address_School/college,Marks_obtained,Our_of_marks}= req.body;
    
        if(!Reg_Id || !Custom_Id || !Exam_type || !Month_of_Passing || !Year_of_exam || !Board || !School/college_name || !Address_School/college || !Marks_obtained || !Our_of_marks){
            return res.status(422).json({error: "Please fill all fields properly"}); 
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM qualification_details WHERE Custom_Id =?",[Custom_Id]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO qualification_details VALUES(?,?,?,?,?,?,?,?,?,?)",[Reg_Id, Custom_Id, Exam_type, Month_of_Passing,Year_of_exam,Board,School/college_name,Address_School/college,Marks_obtained,Our_of_marks ]);
                          console.log(data[0]);
                          res.status(200).json({msg: "Student Qualifications added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "Student Qualifications already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });


module.exports = router;