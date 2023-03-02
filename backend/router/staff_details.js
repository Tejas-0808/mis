const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);



//adding branch

router.get("/facultyadvisor/:id", async(req, res)=> {
    const deptId = req.params.id;
    try {
        const data = await query("SELECT First_Name, Middle_Name, Last_Name from staff_details WHERE Branch_id = ?", deptId);
        const result = data;
        return res.json(result);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ Error: err });
    }
})

router.get("/staff_details/:id", async (req,res)=> {
    const br_id = req.params.id;
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM staff_details where Branch_id=?", [br_id]);
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


router.post('/staff_details', async (req, res) => {

    const {Staff_id,First_name,Middle_Name,Last_Name,Branch_id,Qualifications,role_id ,Email_id,Phone_no,Address,Gender,Marital_Status} = req.body;
    
        if(!Staff_id || !First_name || !Middle_Name || !Last_Name || !Branch_id || !Qualifications || !role_id || !Email_id
            || !Phone_no || !Address || !Gender || !Marital_Status){
            return res.status(422).json({error: "plz fill all fields properly"});
        }
    
         try{
    
            (async()=>{
                try{
                    const data = await query("SELECT * FROM staff_details WHERE Staff_id=?",[Staff_id]);
                    userExists = await data[0];
                }
                finally{
                    // pool.end();
                }
    
                if(!userExists){            
                    (async()=>{
                        try{
    
                          const data = await query("INSERT INTO Staff_details VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",[Staff_id,First_name,Middle_Name,Last_Name,Branch_id,Qualifications,role_id ,
                            Email_id,Phone_no,Address,Gender,Marital_Status]);
                          console.log(data[0]);
                          res.status(200).json({msg: "Staff_details added successfully"})
                        }
                        finally{
                            
                        } 
                    })()
                }
                else{
                    return res.status(422).json({error: "staff_details already exists"});
                }     
           })()
         }
         catch(err) {
             console.log(err);
         }
    });


module.exports = router;