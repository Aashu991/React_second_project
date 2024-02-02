const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aashu123@",
    database: "mydb123"
});

module.exports = con;

// con.connect((err) => {
//     if(err){
//         console.log("err");
//     }else{
//         console.log("Conected");
//     }
// });