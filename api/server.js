const express = require("express");
const body_parser = require("body-parser");
const cors = require('cors');
var knex = require('knex');

var port_number;
const Host = "172.17.0.2";
const app = express();

const pg = knex({
    client: 'pg',
    connection: {
      host : Host,
      user : 'test',
      password : 'test',
      database : 'Movie Recommendation System'
    }
  });


app.use(body_parser.json());
app.use(cors());


const server = app.listen(9000, () => {
    port_number = server.address().port;
    console.log('Listening on port:', port_number);
});


var user = {
        id: 0,
        email: "",
        password: "",
        name: "",
        age: 0,
        phone: ""
}

app.get('/', (req, res) => {
    res.send("HELLLLLLLLO");
});


app.post('/signin', (req, res) => {
    user = req.body;
    //console.log(user);
    pg.raw('select * from _user where email = ? and password = ?', [user.email, user.password])
    .then((user) => {
        if(user.rows.length != 0) // email and password exist
        {
            res.json("success")
        }
        else
        {
            res.json('faild');
        }
    });
});

app.post('/register', (req, res) => {
    user = req.body;
    
    pg.raw('select * from _user where email = ?', [user.email]).then((users) => {
        if(users.rows.length != 0) // email already exist
        {
            res.json('faild');
        }
        else
        {
            pg.raw('select count(*) from _user').then((num_of_users) => {
                user.id = Number(num_of_users.rows[0].count) + 1;
                pg.raw('insert into _user(id, name, email, password, age) values(?, ?, ?, ?, ?);',
                [user.id, user.name, user.email, user.password, user.age])
                .catch(err => console.log(err));
            });
        
            res.json("success")
        }
    });
});

module.exports = {
    port_number: port_number
}
