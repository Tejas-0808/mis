const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);

//adding branch

router.get("/time_table", async (req, res) => {
  try {
    (async () => {
      const data = await query("SELECT * FROM time_table");
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

router.post("/time_table", async (req, res) => {
  const { session, degree, department, scheme, sem, sub_type, course_name, staff_id, time_slot, batch } = req.body;

  if (!session || !degree || !department || !scheme || !sem || !sub_type || !course_name || !staff_id || !time_slot || !batch) {
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
              "INSERT INTO time_table VALUES(?,?,?,?,?,?,?,?,?,?)",
              [session, degree, department, scheme, sem, sub_type, course_name, staff_id, time_slot, batch]
            );
            console.log(data[0]);
            res.status(200).json({ msg: "Time_table added successfully" });
          } finally {
          }
        })();
      } else {
        return res.status(422).json({ error: "Time_table already exists" });
      }
    })();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
