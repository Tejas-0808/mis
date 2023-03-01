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

module.exports = router;