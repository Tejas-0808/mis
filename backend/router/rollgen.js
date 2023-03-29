const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);


router.get("/rollgen", async (req, res) => {
    const { admission_batch, department, degree, semester } = req.query;
    console.log(admission_batch)
    console.log(department);
    console.log(degree);
    console.log(semester);
    try {
        const data = await query("SELECT First_Name, Middle_Name, Last_Name from student_info WHERE Admission_batch = ? AND Branch = ? AND Degree = ? AND Semester = ? ORDER BY Last_Name", [admission_batch, department, degree, semester]);
        const result = data;
        return res.json(result);
    } catch (err) {
        console.log(err);
        return res.status(400).json({ Error: err });
    }
})

router.post("/rollgen", async(req,res) => {
    const data = await req.body;
    console.log(data);
    const name = data.key;
    const roll = data.rolln;
    const nameParts = name.split(" ");
    const fname = nameParts[0];
    const mname = nameParts[1];
    const lname = nameParts[2];
    console.log(fname);
    console.log(mname);
    console.log(lname);
    // const [key,value] = Object.entries(namerollobj)[0];
    // console.log(key);
    // console.log(value);
    try{
        (async()=>{
            query('update student_info set `roll_no` = ? where First_Name = ? and Middle_Name = ? and Last_Name =?', [roll, fname, mname, lname])
        })()
    }
    catch(err){
        console.log(err);
    }
})

module.exports = router;