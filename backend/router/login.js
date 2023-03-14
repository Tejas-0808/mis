const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const router = express.Router();
http = require("http");
const util = require("util");
const { pool } = require("../db/mySql");
const query = util.promisify(pool.query).bind(pool);

const secretKey = "secret_key";
const sessionTimeout = 6; // 1 hour in seconds

function generateToken(user) {
  const payload = {
    username: user.username,
    expires: Date.now() + sessionTimeout * 1000,
  };
  return jwt.sign(payload, secretKey);
}

function verifyToken(token) {
  try {
    const payload = jwt.verify(token, secretKey);
    console.log(payload.expires + "  7 ");
    console.log(Date.now());
    if (payload.expires < Date.now()) {
      return null;
    }
    return payload.username;
  } catch (err) {
    return null;
  }
}

router.post("/register", (req, res) => {
  const { login_id, username, password } = req.body;

  const hashedPassword = bcrypt.hashSync(password, 10);

  pool.query(
    "INSERT INTO login_details (login_id,username, password, role_id) VALUES (?, ?, ?, ?)",
    [login_id, username, hashedPassword, 1],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: "Error registering user" });
      } else {
        res.status(200).json({ message: "User registered successfully" });
      }
    }
  );
});

router.post("/login", (req, res) => {
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

          if (passwordMatch) {
            // const token = jwt.sign({ id: user.id, username: user.username }, 'secretkey');
            const token = generateToken(user);
            res.status(200).json({ message: "Login successful", token });
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
