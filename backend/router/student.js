const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const query = util.promisify(pool.query).bind(pool);
const verifyToken = require('./login')

router.get("/student/:roll_no", verifyToken, async (req,res)=> {
    try{
        const roll_no = req.params.roll_no;
         //const roll_no = 'BE19F01F018'
        console.log(roll_no);
        (async()=>{
            
            const data = await query("SELECT * FROM student_info where roll_no=?",roll_no);
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
router.post('/student_info', async (req, res) => {

    const {Reg_Id, roll_no, First_Name, Middle_Name, Last_Name, Email_id, Mobile_No, Caste, Religion, Nationality, Category, Blood_group, Gender, D_O_B, Birth_Place, Marital_Status, Seat_type, Student_type, Addhar_no, Permanent_Add, Current_Add, Physically_handicapped, Branch, Photo, Signature, Fathers_Name, Fathers_email, Fathers_mobile, Fathers_occupation, Fathers_officeno, Mothers_Name, Mothers_email, Mothers_mobile, Mothers_occupation, Mothers_officeno, Guardian_Name, Guardian_email, Guardian_mobile, Guardian_occupation, Guardian_officeno, Date_of_admission, Degree, Payment_type, State_eligibility, Year, Admission_batch, Semester} = req.body;

    if(!Reg_Id ||  !roll_no || !First_Name || !Middle_Name || !Last_Name || !Email_id || !Mobile_No || !Caste || !Religion || !Nationality || !Category || !Blood_group || !Gender || !D_O_B || !Birth_Place || !Marital_Status || !Seat_type || !Student_type || !Addhar_no || !Permanent_Add || !Current_Add || !Physically_handicapped ) {
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

                      const data = await query("INSERT INTO student_info VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",[
                        Reg_Id, 
                        roll_no, 
                        First_Name, 
                        Middle_Name, 
                        Last_Name, 
                        Email_id, 
                        Mobile_No, 
                        Caste, 
                        Religion, 
                        Nationality, 
                        Category, 
                        Blood_group, 
                        Gender, 
                        D_O_B, 
                        Birth_Place, 
                        Marital_Status, 
                        Seat_type, 
                        Student_type, 
                        Addhar_no, 
                        Permanent_Add, 
                        Current_Add, 
                        Physically_handicapped, 
                        Branch, 
                        Photo, 
                        Signature, 
                        Fathers_Name, 
                        Fathers_email,
                        Fathers_mobile, 
                        Fathers_occupation, 
                        Fathers_officeno, 
                        Mothers_Name, 
                        Mothers_email, 
                        Mothers_mobile, 
                        Mothers_occupation, 
                        Mothers_officeno, 
                        Guardian_Name, 
                        Guardian_email, 
                        Guardian_mobile,
                        Guardian_occupation, 
                        Guardian_officeno, 
                        Date_of_admission, 
                        Degree, 
                        Payment_type, 
                        State_eligibility, 
                        Year, 
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