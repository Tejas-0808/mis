const express = require("express");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const { use, route } = require("./auth");
const query = util.promisify(pool.query).bind(pool);
const verifyToken = require("./verifyToken");
// const jwt = require("jsonwebtoken");


// const secretKey = "secret_key";

// function verifyToken(req,res,next) {
//   const token = req.headers['authorization'];
//   if(token){
//     console.log(token);
//     jwt.verify(token,secretKey, (err,valid)=> {
//       if(err) {
//         res.status(401).send({result: "Please provide valid token"})
//         console.log("err");
//       }else{
//         // next();
//       }
//     });
//   }else{
//     res.status(403).send({result: "Please add token with header"})
//     console.log("err1");

//   }
//   console.log("middle ware called",token)
//   next();
// }
//adding branch

router.get("/tables", async (req, res) => {
  try {
    (async () => {
      const data = await query("SHOW TABLES");
      const result = await data;
      return res.json(result);
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

router.get("/tablename", async (req, res) => {
  try {
    (async () => {
      const data = await query("select * from Branch");
      const result = await data;
      return res.json(result);
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

router.get("/branch", verifyToken, async (req, res) => {
  try {
    (async () => {
      // "UPDATE branch SET Students_enrolled = ( SELECT COUNT(*) FROM student_info WHERE Branch = 'Computer Science') WHERE Branch_name = 'Computer Science' UNION ALL UPDATE branch SET Students_enrolled = ( SELECT COUNT(*) FROM student_info WHERE Branch = 'Electrical') WHERE Branch_name = 'Electrical' UNION ALL UPDATE branch SET Students_enrolled = ( SELECT COUNT(*) FROM student_info WHERE Branch = 'Civil') WHERE Branch_name = 'Civil' UNION ALL UPDATE branch SET Students_enrolled = ( SELECT COUNT(*) FROM student_info WHERE Branch = 'Mechanical') WHERE Branch_name = 'Mechanical' UNION ALL UPDATE branch SET Students_enrolled = ( SELECT COUNT(*) FROM student_info WHERE Branch = 'Electronics and Telecommunication') WHERE Branch_name = 'Electronics and Telecommunication' UNION ALL UPDATE branch SET Students_enrolled = ( SELECT COUNT(*) FROM student_info WHERE Branch = 'Information Technology') WHERE Branch_name = 'Information Technology'";



      // const values = ['Civil', 'Mechanical', 'Computer Science', 'Electrical', 'Electronics and Telecommunication', 'Information Technology'];


      const data = await query("SELECT * FROM branch");
      const result = await data;
      console.log(result);

      result.forEach((obj) => {
        console.log(obj.Branch_name);
        (async () => {
          const data1 = await query("UPDATE branch SET Students_enrolled = ( SELECT COUNT(*) FROM student_info WHERE Branch = ?) WHERE Branch_name = ?", [obj.Branch_name, obj.Branch_name]);
        })();
      });

      return res.json(result);
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

//fetching data of particular id
router.get("/branch/:id", verifyToken, async (req, res) => {
  const Branchid = req.params.id;

  try {
    (async () => {
      const data = await query(
        "SELECT * FROM branch where Branch_id = ?",
        Branchid
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

router.post("/branch", verifyToken, async (req, res) => {
  const { Branch_name, HOD } = req.body;
  console.log(Branch_name);
  console.log(HOD);

  if (!Branch_name || !HOD) {
    return res.status(422).json({ error: "plz fill all fields properly" });
  }

  try {
    (async () => {
      try {
        const data = await query("SELECT * FROM branch WHERE Branch_name=?", [
          Branch_name,
        ]);
        userExists = await data[0];
      } finally {
        // pool.end();
      }

      if (!userExists) {
        (async () => {
          try {
            const data = await query("INSERT INTO branch (Branch_name,HOD) VALUES(?,?)", [
              Branch_name,
              HOD
            ]);
            console.log(data[0]);
            res.status(200).json({ msg: "Branch added successfully" });
          } finally {
          }
        })();
      } else {
        return res.status(422).json({ error: "Branch already exists" });
      }
    })();
  } catch (err) {
    console.log(err);
  }
});

//update the branch
router.put("/branch/:id", verifyToken, async (req, res) => {

  const { Branch_name, HOD } = req.body;

  if (!Branch_name || !HOD) {
    return res.status(422).json({ error: "plz fill all fields properly" });
  }
  const Branchid = req.params.id;
  console.log(Branchid);
  try {
    (async () => {
      const q =
        "Update branch set `Branch_name` = ?, `HOD` = ? where Branch_id = ?";

      const values = [
        req.body.Branch_name,
        req.body.HOD
      ];

      pool.query(q, [...values, Branchid], (err, data) => {
        if (err) return res.json(err);

        return res.json("Branch has been updated succesfully");
      });
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

router.delete("/branch/:id", verifyToken, async (req, res) => {
  const Branchid = req.params.id;
  console.log(Branchid);
  try {
    (async () => {
      const q = "Delete from branch where Branch_id = ?";

      pool.query(q, [Branchid], (err, data) => {
        if (err) return res.json(err);

        return res.json("Branch has been deleted");
      });
    })();
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: err });
  }
});

module.exports = router;
