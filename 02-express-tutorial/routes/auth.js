const express = require('express');
const router = express.Router();

// <form action="/login" method="POST"></form>
// send the form to "/login"
// return POST Method
router.post('/', (req, res) => {
    
    // console.log(req.body)
    // If express.urlencoded({extended: true}), [Object: null prototype] { name: '213d' 
    // If express.urlencoded({extended: false}, { name: '213d'}

    const {name} = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    return res.status(401).send('Please Provide Credentials');
});

module.exports = router;