const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);

// router.get("/newuser", async (req,res)=> {
//     try{

//         (async()=>{
            
//             const data = await query("SELECT * FROM staff_details");
//             const result = await data;
//             console.log(result);
//             return res.json(result);

//             // return res.json(data);
            
//         })()
//     }
//     catch (err) {
//         console.log(err);
//         return res.status(400).json({error: err});
//     }
// })


//Adding student data
router.post('/studpassword', async (req, res) => {

    const {username, password, role_id} = req.body;

    if( !username || !password ) {
        return res.status(422).json({error: "plz fill all fields properly"});
    }

     try{

        (async()=>{
            try{
                const data = await query("SELECT * FROM login_details WHERE username=?",[username]);
                userExists = await data[0];
            }
            finally{
                // pool.end();
            }

            if(!userExists){            
                (async()=>{
                    try{

                      const data = await query("INSERT INTO login_details(username, password, role_id)  VALUES(?,?,?)",[
                        username, 
                        password, 
                        role_id
                    ]);
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