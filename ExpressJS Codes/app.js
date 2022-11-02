const express = require('express');
const app = express();
const people = require('./routes/people');
const login = require('./routes/auth');
// static assets
app.use(express.static('./public'))

// parse from data
app.use(express.urlencoded({ extended : false })); 

app.use('/api/people', people);

app.use('/login', login)


app.listen(5000,() => {
    console.log("listening on port 5000");
})