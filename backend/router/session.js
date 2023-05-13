const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);
const verifyToken = require("./verifyToken");

//get session
router.get("/session",verifyToken, async (req, res) => {
  try {
    (async () => {
      const data = await query("SELECT * FROM sessions");
      const result = await data;
      return res.json(result);

    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

//fetching data of particular id
router.get("/session/:id",verifyToken, async (req, res) => {
  const Sessionid = req.params.id;

  try {
    (async () => {
      const data = await query(
        "SELECT * FROM sessions where session_id = ?",
        Sessionid
      );
      const result = await data[0];
      // console.log(result);
      return res.json(result);

      // return res.json(data);
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

//adding session
router.post("/session", verifyToken, async (req, res) => {
    // const session_id = req.body.session_id;
  const { term, year } = req.body;
  // console.log(session_id);
  console.log(term);
  console.log(year);
const academic_year = `${year}-${(year % 100) + 1}`;
const academic_year_formatted = academic_year.length === 6 ? academic_year : `${academic_year}`;
const session_name1 = `${term} ${academic_year_formatted}`;

  // session_name=  `${term} ${year}-${(year%100+1)}`;
  console.log(session_name1);

  if (!term || !year || !session_name1) {
    return res.status(422).json({ error: "please fill all fields properly" });
  }

  try {
    (async () => {
      // try {
      //   const data = await query("SELECT * FROM sessions WHERE session_id=?", [
      //     session_id,
      //   ]);
      //   userExists = await data[0];
      // } finally {
      //   // pool.end();
      // }

      if (true) {
        (async () => {
          try {
            const data = await query("INSERT INTO sessions (session_name, term, year) VALUES(?,?,?)", [
              session_name1,
              term,
              year,
            ]);
            // console.log(data[0]);
            res.status(200).json({ msg: "session added successfully" });
          } finally {
          }
        })();
      } else {
        return res.status(422).json({ error: "session already exists" });
      }
    })();
  } catch (err) {
    console.log(err);
  }
});

//update the session
router.put("/session/:id",verifyToken, async (req, res) => {
  const sessionid = req.params.id;
  console.log(sessionid);
  try {
    (async () => {
      const q =
        "Update sessions set `session_id` = ?, `session_name` = ?, `term` = ?, `year` = ? where session_id = ?";

      const values = [
        req.body.session_id,
        req.body.session_name,
        req.body.term,
        req.body.year,
      ];

      pool.query(q, [...values, sessionid], (err, data) => {
        if (err) return res.json(err);

        return res.json("session has been updated succesfully");
      });
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

//delete the session
router.delete("/session/:id", verifyToken, async (req, res) => {
  const sessionid = req.params.id;
  console.log(sessionid);
  try {
    (async () => {
      const q = "Delete from sessions where session_id = ?";

      pool.query(q, [sessionid], (err, data) => {
        if (err) return res.json(err);

        return res.json("session has been deleted");
      });
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

module.exports = router;
