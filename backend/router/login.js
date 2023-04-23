const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const query = util.promisify(pool.query).bind(pool);

const secretKey = "secret_key";
const sessionTimeout = 60 * 60; // 1 hour in seconds


function generateToken(user) {
  const payload = {
    username: user.username,
    role: user.role_id,
    expires: Date.now() + sessionTimeout * 1000,
  };
  return jwt.sign(payload, secretKey);
}

// function verifyToken(token) {
//   try {
//     const payload = jwt.verify(token, secretKey);
//     // console.log(payload.expires + "  7 ");
//     // console.log(payload);
//     // console.log(Date.now());
//     if (payload.expires < Date.now()) {
//       return null;
//     }
//     return payload.username;
//   } catch (err) {
//     return null;
//   }
// }

// const vr = function verifyToken(req,res,next) {
//   console.log("middle ware called")
// }

// router.post("/register", async  (req, res) => {
//   const { login_id, username, password } = req.body;
//   // const salt =  bcrypt.genSalt();
//   // const hashPassword =  bcrypt.hash(password, salt);
//   const hashedPassword = bcrypt.hashSync(password, 10);
//   try {
//     await pool.query(
//       "INSERT INTO login_details (login_id, username, password, role_id) VALUES (?, ?, ?, ?)",
//       [login_id, username, hashedPassword, 1],
//       (err, result) => {
//         if (err) {
//           console.error(err);
//           res.status(500).json({ message: "Error registering user" });
//         } else {
//           res.status(200).json({ message: "User registered successfully" });
//         }
//       }
//     );
//     res.json({msg: "Registration Successful"});
// } catch (error) {
//     console.log(error);
// }
  
// });

//check individual id links assigned
router.post("/links_id", async(req, res) => {
  const username = req.body;
  // console.log(username);
  const linkdata = await query("SELECT link_id from linkassigned where staff_username=?",['1']);
  const staff_id = linkdata;
  const assigned_link = [];
  for(const val of linkdata) {
    // console.log(val.link_id)
    assigned_link.push(val.link_id);
}
  // console.log(assigned_link);
  return res.json(assigned_link);
})

router.post("/login", async(req, res) => {
  const { username, password } = req.body;

  pool.query(
    "SELECT * FROM login_details WHERE username = ?",
    [username],
    (err, results) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Error logging in" });
      } else {
        if (results.length > 0) {
          const user = results[0];
          const passwordMatch = bcrypt.compareSync(password, user.password);
          const role = user.role_id;
          if (passwordMatch) {
            // const token = jwt.sign({ id: user.id, username: user.username }, 'secretkey');
            const token = generateToken(user);
            res.status(200).json({ message: "Login successful", token, role });
          } else {
            res.status(401).json({ message: "Invalid username or password" });
          }
        } else {
          res.status(401).json({ message: "Invalid username or password" });
        }
      }
    }
  );
});
// const username = localStorage.getItem('username');
// router.get("/user_id", async (req, res) => {
//   try {
//     (async () => {
//       const data = await query("SELECT staffID from staff_details where Staff_username=?",[username]);
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

router.get("/me", (req, res) => {
  const token = req.headers.authorization;
  const username = verifyToken(token);
  if (!username) {
    res.status(401).send("Invalid token");
    return;
  }
  res.json({ username });
});

module.exports = router;
