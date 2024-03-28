const express = require('express');
const app = express();
const logger = require('./logger');
const { lowerFirst } = require('lodash');

// app.use(logger); // applying middleware to all requests (routes)

app.use('/api', logger); // only apply for the route start with '/api'

app.get('/', (req, res) => {
    res.send('Home');
})

// If app.use(logger); is applied here, the upper route will not have logger middleware

app.get('/about', (req, res) => {
    res.send('About');
})
 
app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    res.send('Items');
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})