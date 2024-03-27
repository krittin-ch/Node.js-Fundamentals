const express = require('express');
const app = express();
// or
// const app = require('express')()

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

// status = 200 --> the request is successful
// status = 404 --> the request is not successful

app.get('/', (req, res) => {
    console.log('user hit the resource')
    res.status(200).send('Home Page');
})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.all('*', (red, res) => {
    res.status(404).send('<h1>Resource Found Page</h1>')
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
})