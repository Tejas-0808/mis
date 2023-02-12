const express = require("express");
const studentController = require("../controllers/studentController");

const router = express.Router();

router.get("/students", studentController.listStudents);
router.post("/students", studentController.createStudent);
router.get("/students/:id", studentController.getStudent);

module.exports = router;