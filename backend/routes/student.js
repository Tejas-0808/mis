const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql')
const query = util.promisify(pool.query).bind(pool);


router.get('/',(req,res) => {
    res.send(`Hello worldd `);
});

router.post('/student', async (req, res) => {
    

    const { idstudent, name, age, email } = req.body;

    if(!idstudent || !name || !age || !email ){
        return res.status(422).json({error: "plz fill all fields properly"});
    }

     try{

        (async()=>{
            try{
                const data = await query("SELECT * FROM student WHERE idstudent=?",[idstudent]);
                userExists = await data[0];
            }
            finally{
                // pool.end();
            }

            if(!userExists){            
                (async()=>{
                    try{

                      const data = await query("INSERT INTO student VALUES(?,?,?,?)",[idstudent, name, age, email]);
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
// router.post('/student', async (req, res) => {
//     try {
//       const { id, name, age, email } = req.body;
//       const data = await query('INSERT INTO student (id, name, age, email) VALUES ($1, $2, $3, $4)', [id, name, age, email]);
//       res.send({
//         message: 'Student added successfully',
//         student: {
//             id,
//           name,
//           age,
//           email
//         }
//       });
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send({
//         message: 'Error adding student'
//       });
//     }
//   });
  

// router.post('/student',async(req,res)=>{
//     try{
                
//                     //const data = await query("SELECT * FROM student_login whEre roll_no=?",[username]);
//                     const data = await query();
//                     res.send('profile');
                
//         } 
//     catch(err){
//         console.log(err);
//     }
// })

module.exports = router;