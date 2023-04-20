const jwt = require("jsonwebtoken");


const secretKey = "secret_key";
 
const verifyToken = function verifyToken(req,res,next) {
  const token = req.headers['authorization'];
  if(token){
    console.log(token);
    jwt.verify(token,secretKey, (err,valid)=> {
      if(err) {
        res.status(401).send({result: "Please provide valid token"})
        console.log("err");
      }else{
        // next(); 
      }
    });
  }else{
    res.status(403).send({result: "Please add token with header"})
    console.log("err1");
  }
  console.log("middle ware called",token)
  next();
}

module.exports = verifyToken;