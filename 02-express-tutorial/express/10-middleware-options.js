const express = require('express');
const app = express();
const morgan = require('morgan');

const logger = require('./logger');
const authorize = require('./authorize');

// 1. use vs route
// 2. options - our own / express / third party

// app.use([logger, authorize]); // our own middleware

// app.use(express.static('./public')); // express middleware

app.use(morgan('tiny')); // third party middleware (return the response time)
app.get('/', (req, res) => {
    res.send();
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
});

