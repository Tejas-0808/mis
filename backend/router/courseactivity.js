const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);


router.post("/courseactivity", async(req ,res)=>{
    const branch = req.body.Branch.slice(0, 1)
    const session = req.body.session.slice(0, 1)
    const semester = req.body.semester 
    console.log(branch);
    console.log(session);
    console.log(semester);
    try {
        (async()=>{
            const data = await query("SELECT coursecode, coursename, course_category FROM structure WHERE finally_offered = 1 and branch_id = ? and session_id = ? and semester = ?",[branch, session, semester])
            const result = await data;
            console.log(result);
            return res.json(result)
        })()
    } catch (err) {
        console.log(err);
        return res.status(400).json({error: err});
    }
})


//to add courses into courses taken table
router.post("/confirmcourse", async(req, res)=>{
    const roll = req.body.roll_no;
    const sem = req.body.semester;
    const session = req.body.session;
    const courses = req.body.courses;
    console.log(roll);
    console.log(sem);
    console.log(session);
    console.log(courses);


    // if (!s_no || !roll || !sem || !session || !courses) {
    //     return res.status(422).json({ error: "plz fill all fields properly" });
    // }
    
    try {
        (async () => {
            try {
            const data = await query("SELECT roll_no FROM courses_taken_stud WHERE roll_no=?", [
                [roll]
            ]);
            userExists = await data[0];
            } finally {
            // pool.end();
            }

           if(!userExists){
            (async () => {
                try {
                const data = await query("INSERT INTO courses_taken_stud (`roll_no`, `semester`, `session`, `courses`) VALUES(?,?,?,?)", [
                    roll,
                    sem,
                    session,
                    JSON.stringify(courses)
                ]);
                console.log(data[0]);
                // res.status(200).json({ msg: "courses registration added successfully" });
                } finally {
                }
            })();}
            else{
                return res.json("User already exists.");
            }
           
        })();
    } catch (err) {
        console.log(err);
    }
})


router.get("/getfacultyid", async(req,res) => {
    const uname = req.query.username;
    console.log("222" + uname);
    try {
        (async () => {
          const data = await query("select faculty_adv_id from student_info where roll_no = ?", [uname]);
          const result = await data;
          console.log(result);
          return res.json(result);
    
          // return res.json(data);
        })();
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err });
    }
})

module.exports = router