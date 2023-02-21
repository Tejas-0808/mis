const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);

//adding branch

router.get("/attendance", async (req, res) => {
  try {
    (async () => {
      const data = await query("SELECT * FROM attendance");
      const result = await data;
      return res.json(result);

      // return res.json(data);
      console.log(result);
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

router.post("/attendance", async (req, res) => {
  const { aid, roll_no, date_rec, time_slot, status, staff_id, lect, tut, pract, coursename } = req.body;

  if (!aid || !roll_no || !date_rec || !time_slot || !status || !staff_id || !lect || !tut || !pract || !coursename) {
    return res.status(422).json({ error: "plz fill all fields properly" });
  }

  try {
    (async () => {
      // try{
      //     const data = await query("SELECT * FROM branch WHERE Branch_name=?",[Branch_name]);
      //     userExists = await data[0];
      // }
      // finally{
      //     // pool.end();
      // }

      if (true) {
        (async () => {
          try {
            const data = await query(
              "INSERT INTO attendance VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
              [aid, roll_no, date_rec, time_slot, status, staff_id, lect, tut, pract, coursename]
            );
            console.log(data[0]);
            res.status(200).json({ msg: "Attendance added successfully" });
          } finally {
          }
        })();
      } else {
        return res.status(422).json({ error: "Attendance already exists" });
      }
    })();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
