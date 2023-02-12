const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//filling staff details
router.post('/staff_data', async (req, res) => {

    const {staff_id, staff_username, First_name, Middle_Name, Last_Name, Branch_id, Qualifications, role_id, Email_id, Phone_no, Address, Gender, Martial_Status } = req.body;

    if(!staff_id || !staff_username || !First_name || !Middle_Name || !Last_Name || !Branch_id || !Qualifications || !Email_id || !Phone_no || !Address || !Gender || !Martial_Status){
        return res.status(422).json({error: "plz fill all fields properly"});
    }

     try{

        (async()=>{
            try{
                const data = await query("SELECT * FROM staff_details WHERE staff_username=?",[staff_username]);
                userExists = await data[0];
            }
            finally{
                // pool.end();
            }

            if(!userExists){            
                (async()=>{
                    try{

                      const data = await query("INSERT INTO staff_details VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",[staff_id, staff_username, First_name, Middle_Name, Last_Name, Branch_id, Qualifications, role_id, Email_id, Phone_no, Address, Gender, Martial_Status ]);
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