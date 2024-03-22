// Since module.exports is an object. We can import in this following ways

module.exports.items = ['item1', 'item2'] // const items = ['item1', 'item2']
const person = {
    name:'bob'
}

module.exports.singlePerson = person

// console.log(module.exports)