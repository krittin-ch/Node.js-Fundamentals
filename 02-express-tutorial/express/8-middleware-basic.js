const express = require('express');
const app = express();

// req => middleware => res (middleware is between req and res)

// This is a middleware
const logger = (req, res, next) => { 
    const method = req.method;
    const url = req.url;
    const time = new Date().getFullYear();
    console.log(method, url, time); // GET / 2024
    next(); // without this line, the logger - middleware will not pass to the next middleware
}

app.get('/', logger, (req, res) => {
    res.send('Home'); // the next middleware (in our case)
})

app.get('/about', logger, (req, res) => {
    console.log('About');
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...;')
})