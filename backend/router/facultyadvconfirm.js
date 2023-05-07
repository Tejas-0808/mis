const express = require('express');
const router = express.Router();
http = require('http');
const util = require('util');
const { pool } = require('../db/mySql');
const { use, route } = require('./auth');
const { log } = require('console');
const query = util.promisify(pool.query).bind(pool);


router.post("/studentswithcourses", async (req, res) => {
    const degree = req.body[0].Degree.slice(0, 1)
    const session = req.body[0].session.slice(2)
    const semester = req.body[0].semester
    const batch = req.body[0].batch.slice(0, 1)
    const fac_id = req.body[1].Faculty_adv;
    // console.log(degree);
    // console.log(batch);
    // console.log(session);
    // console.log(semester);
    // console.log(fac_id);

    try {
        (async () => {
            const data = await query("select roll_no, courses FROM courses_taken where semester = ? and session = ? and fac_adv_id = ?", [semester, session, fac_id])
            const result = await data;
            // console.log(result);
            return res.json(result)
        })()
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err });
    }
})

router.get("/getbranch", async (req, res) => {
    const roll = req.query.roll
    // console.log(roll);
    try {
        (async () => {
            const data = await query("select Branch_id from branch where Branch_name = (select Branch from student_info where roll_no = ?)", [roll])
            const result = await data;
            // console.log(result)
            return res.json(result)
        })()
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err })
    }
})

router.get("/fetchallcourses", async (req, res) => {
    const branch = req.query.branchid
    const session = req.query.sessionid
    const semester = req.query.sem
    console.log(branch);
    console.log(session);
    console.log(semester);
    try {
        (async () => {
            const data = await query("SELECT coursecode, coursename, course_category FROM structure WHERE finally_offered = 1 and branch_id = ? and session_id = ? and semester = ?", [branch, session, semester])
            const result = await data;
            console.log(result);
            return res.json(result)
        })()
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err })
    }

})

router.post("/getcourse", async (req, res) => {
    const code = req.body;
    const arr = code.codes;
    // console.log(arr);

    try {
        const promises = arr.map(async (a) => {
            const data = await query("select coursecode, coursename from structure where coursecode = ?", [a]);
            return data;
        });

        const result = await Promise.all(promises);
        // console.log(result);
        return res.json(result);
    }
    catch (err) {
        console.log(err);
    }

    // try {
    //     (async () => {
    //         const data = await query("select coursename from structure where coursecode = ?", [code])
    //         const result = await data;
    //         console.log(result)
    //         return res.json(result)
    //     })()
    // } catch (error) {
    //     console.log(error);
    //     return res.status(400).json({ error: error });
    // }
})

router.get("/getfacid", async (req, res) => {
    const uname = req.query.uname;
    // console.log("222" + uname);
    try {
        (async () => {
            const data = await query("select Faculty_adv from staff_details where Staff_username = ?", [uname]);
            const result = await data;
            // console.log(result);
            return res.json(result);

            // return res.json(data);
        })();
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err });
    }
})


router.get("/getstdcourse", async (req, res) => {
    const roll = req.query.roll_no;
    try {
        (async () => {
            const data = await query("select courses from courses_taken where roll_no = ?", [roll]);
            const result = await data;
            console.log(result);
            return res.json(result);
        })()
    } catch (err) {
        console.log(err);
        return res.status(400).json({ error: err })
    }
})

module.exports = router