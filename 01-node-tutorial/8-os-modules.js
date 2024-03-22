// Built-in Modules

// OS
// PATH
// FS
// HTTP

const os = require('os')

// info about current user
const user = os.userInfo()

// console.log(os)
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)
// uptime is a measure of how long a computer or service is on and available
// downtime is the measure of how long it is not available

const currentOS = {
    name : os.type(),
    release : os.release(),
    totalMem : os.totalmem(),
    freeNem : os.freemem(),
}

console.log(currentOS)