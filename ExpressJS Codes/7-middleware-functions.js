const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./middleware-functions/a-first-middleware-func');
const auth = require('./middleware-functions/b-second-middleware-func');


// By Writing Ourselves
// app.use('/api',[logger,auth]);

// With Express
// app.use(express.static('./public'));

// With Third Party
// app.use(morgan('tiny'));


app.get('/',(req,res) => {
    res.send('home');
})
app.get('/about',(req,res) => {
    res.send('about');
})
app.get('/api/products',(req,res) => {
    res.send('products');
})
app.get('/api/items',(req,res) => {
    res.send('items');
})
app.listen(5000,() => {
    console.log("listening on port 5000");
})