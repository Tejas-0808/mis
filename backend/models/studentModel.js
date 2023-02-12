const mysql = require("mysql2");

const connection = mysql.createConnection({
    host     : 'mis.mysql.database.azure.com',
    port     : '3306',
    user     : 'pgaikwad',
    password : 'India@17pg',
    database : 'mis'
});


function StudentModel(studentData) {
  this.name = studentData.name;
  this.age = studentData.age;
  this.email = studentData.email;
}

StudentModel.getAllStudents = (callback) => {
  connection.query("SELECT * FROM students", (error, results) => {
    if (error) return callback(error);
    callback(null, results);
  });
};

StudentModel.createStudent = (studentData, callback) => {
  const newStudent = new StudentModel(studentData);
  connection.query(
    "INSERT INTO students (name, age, email) VALUES (?,?,?)",
    [newStudent.name, newStudent.age, newStudent.email],
    (error, results) => {
      if (error) return callback(error);
      callback(null, results);
    }
  );
};

StudentModel.getStudent = (studentId, callback) => {
  connection.query(
    "SELECT * FROM students WHERE id = ?",
    [studentId],
    (error, results) => {
      if (error) return callback(error);
      callback(null, results[0]);
    }
  );
};

module.exports = StudentModel;
