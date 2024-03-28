const express = require('express')
const app = express();

let {people} = require('./data');

// USE METHOD
// static assets
app.use(express.static('./02-express-tutorial/methods-public'));

// parse form data
app.use(express.urlencoded({extended: true}));

// parse json
app.use(express.json())

// GET METHOD
// GET Method (Default Method) --> Read Data 
app.get('/api/people', (req, res) => {
    res.status(200).json({success: true, data: people});
});

// POST METHOD
// for javascript.html
app.post('/api/people', (req, res) => {
    const {name} = req.body;
    if (!name) {
        return res.status(400).json({success: false, msg: 'Please Provide Name Value'})
    }
   res.status(201).json({success: true, person: name}); 
});

app.post('/api/postman/people', (req, res) => {
    const {name} = req.body;
    if (!name) {
        res
        .status(400)
        .json({success: false, msg: 'Please Provide Name Value'})
    }
    res.status(200).json({success: true, data: [...people, {name: name}]})
});

// <form action="/login" method="POST"></form>
// send the form to "/login"
// return POST Method
app.post('/login', (req, res) => {
    
    // console.log(req.body)
    // If express.urlencoded({extended: true}), [Object: null prototype] { name: '213d' 
    // If express.urlencoded({extended: false}, { name: '213d'}

    const {name} = req.body;
    if (name) {
        return res.status(200).send(`Welcome ${name}`);
    }
    return res.status(401).send('Please Provide Credentials');
});

// PUT METHOD
app.put('/api/people/:id', (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    
    const person = people.find((person) => person.id === Number(id));
    
    if (!person) {
        return res.status(404).json({success: false, msg: 'Please Provide Name Value'})
    }
    const newPeople = people.map((person) => {
        if(person.id === Number(id)) {
            person.name = name;
        }
        return person;
    })
    return res.status(200).json({success: true, data: newPeople});
});

// DELETE METHOD
app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    
    if (!person) {
        return res
        .status(404)
        .json({success: false, msg: `No person with id ${req.params.id}`});
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id));
    return res.status(200).json({success: true, data: newPeople});
})

app.listen(5000, () => {
    console.log('server is listening on port 5000...');
});