const http = require('http');
const customEmitter = require('./13-event-emitter'); // Return the console.log to the server side from 13-event-emitter.js

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subscribe to it / listen for it / respond to it
// https://nodejs.org/docs/latest/api/http.html for the event name
server.on('request', (req, res) => { // When the request comes, 
    res.end('Welcome');
});

server.listen(3000);
