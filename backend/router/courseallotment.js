const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);
const verifyToken = require("./verifyToken");

//adding branch

// router.get("/b_o_s",verifyToken, async (req, res) => {
//   try {
//     (async () => {
//       const data = await query("SELECT * FROM b_o_s");
//       const result = await data;
//       return res.json(result);

//       // return res.json(data);
//       console.log(result);
//     })();
//   } catch (err) {
//     console.log(err);
//     return res.status(400).json({ error: err });
//   }
// });

//get particular religion

router.get("/courseallotment", async (req, res) => {
  try {
    (async () => {
      const data = await query("SELECT * FROM course_teacher");
    //   const result = await data[0];
    //   console.log(result);
      return res.json(data);
    })()
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err })
  }
})


router.post("/courseallotment", async (req, res) => {
  const { Course,Teacher,AddTeacher } = req.body;
  console.log(Course);

//   if (!bos_id || !bos_name || !code) {
//     return res.status(422).json({ error: "plz fill all fields properly" });
//   }
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
            const data = await query("INSERT INTO course_teacher (course_name,teacher,add_teacher) VALUES(?,?,?)", [
              Course,
              Teacher,
              AddTeacher
            ]);
            console.log(data[0]);
            res.status(200).json({ msg: "teacher added successfully" });
          } finally {
          }
        })();
      } else {
        return res.status(422).json({ error: "b_o_s already exists" });
      }
    })();
  } catch (err) {
    console.log(err);
  }

});

module.exports = router;
