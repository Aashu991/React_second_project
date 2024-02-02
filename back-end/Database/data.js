const express = require('express');
const cors = require('cors');
const con = require('./config');
const app = express();
app.use(cors());
app.use(express.json());

app.post("/insert_data", (req, resp) => {
    let data = req.body;
    con.query("INSERT INTO mydb123.data SET ?", data, (err, result, fields) => {
        if (err) err;
        resp.send(data);
    });
});

app.post('/login', (req, res) => {
    if()
    const email = req.body.email;
    const password = req.body.password;

    const sql = 'SELECT * FROM mydb123.data WHERE email = ? AND password = ?';

    con.query(sql, [email, password], (err, result) => {
        if (err) throw err;

        if (result.length > 0) {
            res.send(result);
        } else {
            res.send('Login Failed');
        }
    });
});

app.listen(4000);