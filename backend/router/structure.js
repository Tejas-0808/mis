const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);
const verifyToken = require("./verifyToken");
//adding branch

router.get("/structure",verifyToken, async (req, res) => {
  try {
    (async () => {
      // const data = await query("SELECT * FROM structure");
      const data = await query("SELECT strid,master_scheme.master_scheme as master_scheme, course_category.name as course_category_name,semester,branch.Branch_name as branch_name,b_o_s.bos_name as board_of_study, sessions.session_name as session,coursecode, coursename,lecture,tut,pract,ise1,ise2,ise3,PR,TW,ese,total_marks,total_credits,finally_offered, degree_list.degree_name as degree_name,course_type FROM structure INNER JOIN master_scheme ON structure.mastersch_id = master_scheme.mastersch_id INNER JOIN course_category ON structure.course_category =course_category.course_category_id INNER JOIN branch ON structure.branch_id = branch.Branch_id INNER JOIN b_o_s ON structure.board_of_study = b_o_s.bos_id INNER JOIN sessions ON structure.session_id = sessions.session_id INNER JOIN degree_list ON structure.degree_id = degree_list.degree_id")
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

router.get("/structure/:id",verifyToken, async (req, res) => {
  const strId = req.params.id;
  try {
    (async () => {
      const data = await query(
        "SELECT * FROM structure WHERE strid = ?",
        strId
      );
      const result = await data[0];
      console.log(result);
      return res.json(result);
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

router.post("/structure", verifyToken, async (req, res) => {
  const {
    mastersch_id,
    course_category,
    semester,
    branch_id,
    board_of_study,
    coursecode,
    coursename,
    lecture,
    tut,
    pract,
    ise1,
    ise2,
    ise3,
    PR,
    TW,
    ese,
    total_marks,
    total_credits,
  } = req.body;

  if (
    !mastersch_id ||
    !course_category ||
    !semester ||
    !branch_id ||
    !board_of_study ||
    !coursecode ||
    !coursename ||
    !lecture ||
    !tut ||
    !pract ||
    !ise1 ||
    !ise2 ||
    !ise3 ||
    !PR ||
    !TW ||
    !ese ||
    !total_marks ||
    !total_credits
  ) {
    return res.status(422).json({ error: "plz fill all fields properly" });
  }

  try {
    (async () => {
      try {
        const data = await query("SELECT * FROM structure WHERE coursecode=?", [
          coursecode,
        ]);
        userExists = await data[0];
      } finally {
        // pool.end();
      }

      if (!userExists) {
        (async () => {
          try {
            const data = await query(
              "INSERT INTO structure (mastersch_id,course_category,semester,branch_id,board_of_study,coursecode,coursename,lecture,tut,pract,ise1,ise2,ise3,PR,TW,ese,total_marks,total_credits)  VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
              [
                mastersch_id,
                course_category,
                semester,
                branch_id,
                board_of_study,
                coursecode,
                coursename,
                lecture,
                tut,
                pract,
                ise1,
                ise2,
                ise3,
                PR,
                TW,
                ese,
                total_marks,
                total_credits,
              ]
            );
            console.log(data[0]);
            res.status(200).json({ msg: "Structure added successfully" });
          } finally {
          }
        })();
      } else {
        return res.status(422).json({ error: "Structure already exists" });
      }
    })();
  } catch (err) {
    console.log(err);
  }
});

router.delete("/structure/:id",verifyToken, async (req, res) => {
  const strId = req.params.id;
  console.log(strId);
  try {
    (async () => {
      const q = "Delete from structure where strid = ?";

      pool.query(q, [strId], (err, data) => {
        if (err) return res.json(err);

        return res.json("structure has been deleted");
      });
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

router.put("/structure/:id", verifyToken, async (req, res) => {
  const strId = req.params.id;
  console.log(strId);
  try {
    (async () => {
      const q =
        "UPDATE structure SET  `mastersch_id` = ?, `course_category` = ?, `semester` = ?, `branch_id` = ?, `board_of_study` = ?, `coursecode` = ?, `coursename` = ?, `lecture` = ?, `tut` = ?, `pract` = ?, `ise1` = ?, `ise2`= ?, `ise3` = ?, `PR` = ?, `TW` = ?, `ese` = ?, `total_marks` = ?, `total_credits` = ? WHERE strid = ?";
      const value = [
        req.body.mastersch_id,
        req.body.course_category,
        req.body.semester,
        req.body.branch_id,
        req.body.board_of_study,
        req.body.coursecode,
        req.body.coursename,
        req.body.lecture,
        req.body.tut,
        req.body.pract,
        req.body.ise1,
        req.body.ise2,
        req.body.ise3,
        req.body.PR,
        req.body.TW,
        req.body.ese,
        req.body.total_marks,
        req.body.total_credits,
      ];

      pool.query(q, [...value, strId], (err, data) => {
        if (err) return res.json(err);
        return res.json("Structure has been updated.");
      });
    })();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
