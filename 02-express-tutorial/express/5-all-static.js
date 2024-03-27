const express = require('express');
const path = require('path');

const app = express();

// setup static and middleware
// static means the file that server does not have to change
// navbar can be put in the public folder
app.use(express.static('./02-express-tutorial/public'));

app.get('/', (req, res) => {
    res.status(200).send('');
})

app.all('*', (req, res) => {
    res.status(404).send('Resource Not Found');
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})