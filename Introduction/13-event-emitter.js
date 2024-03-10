const EventEmitter = require('events');

const customEmitter = new EventEmitter(); // Instance of the class, i.e. an object

// The event name is 'response'
// many functions can be run in a event (order matters)
customEmitter.on('response', (name, id) => {
    console.log(`data recieved user ${name} with id :${id}`);
});

customEmitter.on('response', () => {
    console.log('some other logic');
});

customEmitter.emit('response', 'krittin', 34);

module.exports = customEmitter;
