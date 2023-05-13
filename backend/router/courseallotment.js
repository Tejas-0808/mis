const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);
const verifyToken = require("./verifyToken");



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

  if (!Course || !Teacher ) {
    return res.status(422).json({ error: "plz fill all fields properly" });
  }
  try {
    (async () => {
      try{
          const data = await query("SELECT * FROM course_teacher WHERE course_name=?",[Course]);
          courseExists = await data[0];
      }
      finally{
          // pool.end();
      }

      if (!courseExists) {
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
        return res.status(422).json({ error: "Course already exists" });
      }
    })();
  } catch (err) {
    console.log(err);
  }

});

router.delete("/courseallotment/:id",verifyToken, async (req, res) => {
  const courseallot_ID = req.params.id;
  console.log(courseallot_ID);
  try {
    (async () => {
      const q = "Delete from course_teacher where courseallot_ID = ?";

      pool.query(q, [courseallot_ID], (err, data) => {
        if (err) return res.json(err);

        return res.json("Course Allotment Delected has been deleted");
      });
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

module.exports = router;
