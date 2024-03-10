const http = require('http');
const customEmitter = require('./13-event-emitter');

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subscribe to it / listen for it / respond to it
// https://nodejs.org/docs/latest/api/http.html for the event name
server.on('request', (req, res) => { // When the request comes, 
    res.end('Welcome');
});

server.emit('request', (req, res) => {
    console.log('asds')
})

// Listen to 'response' event from 13-event-emitter.js
customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id :${id}`);
});

server.listen(3000);
