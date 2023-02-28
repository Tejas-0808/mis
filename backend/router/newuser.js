const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);

router.get("/newuser", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM staff_details");
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


//Adding student data
router.post('/newuser', async (req, res) => {

    const { First_Name, Middle_Name, Last_Name,Branch_id, Qualifications, role_id, Email_id, Phone_no, Address, Gender, Marital_Status} = req.body;

    if( !First_Name || !Middle_Name || !Last_Name || !Email_id || !Branch_id || !Phone_no  || !Gender  || !Address ) {
        return res.status(422).json({error: "plz fill all fields properly"});
    }

     try{

        (async()=>{
            try{
                const data = await query("SELECT * FROM student_info WHERE Email_id=?",[Email_id]);
                userExists = await data[0];
            }
            finally{
                // pool.end();
            }

            if(!userExists){            
                (async()=>{
                    try{

                      const data = await query("INSERT INTO staff_details (First_Name, Middle_Name, Last_Name, Branch_id, Qualifications, role_id, Email_id, Phone_no, Address, Gender, Marital_Status)  VALUES(?,?,?,?,?,?,?,?,?,?,?)",[
                        First_Name, 
                        Middle_Name, 
                        Last_Name, 
                        Branch_id, 
                        Qualifications,
                        role_id,
                        Email_id,
                        Phone_no, 
                        Address, 
                        Gender, 
                        Marital_Status ]);
                      console.log(data[0]);
                      //const data = await query("UPDATE users SET name=?,phone=?,city=?,state=?,country=?,password=?,cpassword=?,emailToken=? WHERE email=?",[name,phone,city,state,country,pass,cpass,Token,email]);
                      res.status(200).json({msg: "User added successfully"})
                    }
                    finally{
                        
                    } 
                })()
            }
            else{
                return res.status(422).json({error: "User already exists"});
            }     
       })()
     }
     catch(err) {
         console.log(err);
     }
});


module.exports = router;