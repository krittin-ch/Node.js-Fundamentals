// CommonJS     - Every file is module (by default)
// Modules      - Encapsulated Code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavor')

// console.log(names)
// sayHi(names.name1)
// sayHi(data.singlePerson.name)

require('./7-mind-grenade') // The console.log still work
// The file is run