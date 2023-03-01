const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);

router.get("/session", async (req, res) => {
  try {
    (async () => {
      const data = await query("SELECT * FROM sessions");
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

//adding session
router.post("/session", async (req, res) => {
    // const session_id = req.body.session_id;
  const { session_id,session_name, term, year } = req.body;
  console.log(session_id);
  console.log(session_name);
  console.log(term);
  console.log(year);

  if (!session_id || !term || !year || !session_name) {
    return res.status(422).json({ error: "please fill all fields properly" });
  }

  try {
    (async () => {
      try {
        const data = await query("SELECT * FROM sessions WHERE session_id=?", [
          session_id,
        ]);
        userExists = await data[0];
      } finally {
        // pool.end();
      }

      if (!userExists) {
        (async () => {
          try {
            const data = await query("INSERT INTO sessions VALUES(?,?,?,?)", [
              session_id,
              session_name,
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
router.put("/session/:id", async (req, res) => {
  const sessionid = req.params.id;
  console.log(sessionid);
  try {
    (async () => {
      const q =
        "Update session set `session_id` = ?, `session_name` = ?, `term` = ?, `year` = ? where session_id = ?";

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
router.delete("/session/:id", async (req, res) => {
  const sessionid = req.params.id;
  console.log(sessionid);
  try {
    (async () => {
      const q = "Delete from session where session_id = ?";

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
