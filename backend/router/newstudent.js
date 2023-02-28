const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);

router.get("/newstudent", async (req,res)=> {
    try{

        (async()=>{
            
            const data = await query("SELECT * FROM student_info");
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
router.post('/newstudent', async (req, res) => {

    const {Reg_Id,  First_Name, Middle_Name, Last_Name, Email_id, Phone_No, Caste, Religion, Nationality, Category, Blood_group, Gender, D_O_B, Birth_Place, Marital_Status, Student_type, Addhar_no, Permanent_Add,  Physically_handicapped, Branch,  Fathers_email,  Fathers_mobile,  Guardian_Name, Date_of_admission, Degree, Payment_type,  Admission_batch, Semester} = req.body;

    if(!Reg_Id || !First_Name || !Middle_Name || !Last_Name || !Email_id || !Phone_No || !Caste || !Religion || !Nationality || !Category || !Blood_group || !Gender || !D_O_B || !Birth_Place || !Marital_Status || !Student_type || !Addhar_no || !Permanent_Add || !Physically_handicapped || !Branch ) {
        return res.status(422).json({error: "plz fill all fields properly"});
    }

     try{

        (async()=>{
            try{
                const data = await query("SELECT * FROM student_info WHERE Reg_Id=?",[Reg_Id]);
                userExists = await data[0];
            }
            finally{
                // pool.end();
            }

            if(!userExists){            
                (async()=>{
                    try{

                      const data = await query("INSERT INTO student_info (Reg_Id,First_Name,Middle_Name,Last_Name,Email_id,Phone_No,Caste,Religion,Nationality,Category,Blood_group,Gender,D_O_B,Birth_Place,Marital_Status,Student_type,Addhar_no,Permanent_Add,Physically_handicapped,Branch,Fathers_email,Fathers_mobile,Guardian_Name,Date_of_admission,Degree,Payment_type,Admission_batch,Semester)  VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[
                        Reg_Id, 
                        First_Name, 
                        Middle_Name, 
                        Last_Name, 
                        Email_id, 
                        Phone_No, 
                        Caste, 
                        Religion, 
                        Nationality, 
                        Category, 
                        Blood_group, 
                        Gender, 
                        D_O_B, 
                        Birth_Place, 
                        Marital_Status, 
                        Student_type, 
                        Addhar_no, 
                        Permanent_Add, 
                        Physically_handicapped, 
                        Branch, 
                        Fathers_email,
                        Fathers_mobile, 
                        Guardian_Name, 
                        Date_of_admission, 
                        Degree, 
                        Payment_type, 
                        Admission_batch, 
                        Semester ]);
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