const express = require('express');
const app = express()
const {products} = require('./data.js')


app.get('/', (req, res) => {

    // res.json([ // The most basic API
    //     {name: 'Tin'},
    //     {name: 'Namwan'}
    // ])

    res.json(products)
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...')
})