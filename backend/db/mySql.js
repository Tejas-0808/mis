const mysql = require('mysql2');


const pool = mysql.createPool({
  host     : 'mis.mysql.database.azure.com',
  port     : '3306',
  user     : 'pgaikwad',
  password : 'India@17pg',
  database : 'mis'
});


// pool.query(`select * from student_login`,(err,res)=>{
//   if(err){

//   }
//   console.log(res)
// })


// con.query('SELECT NOW()', function(err,result) {
//   if(err){
//     throw err;
//   }
//   console.log(result);
// });


module.exports = pool.promise();