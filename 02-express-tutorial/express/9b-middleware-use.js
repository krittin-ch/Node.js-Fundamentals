const express = require('express');
const app = express();
const logger = require('./logger');
const authorize = require('./authorize');

app.use([logger, authorize]); // they will be executed in order

app.get('/', (req, res) => {
    res.send('Home');
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
});

