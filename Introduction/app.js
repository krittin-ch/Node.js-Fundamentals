// npm - global command, come with node.js
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency = use it in any project
// npm install -g <pavkageName>
// npm install -g <pavkageName> (mac)

// package.json - manifest file (tores important info about project/package)
// manual appraoch (create package.json in the root, create propertiees etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// folder node_modules is where all the deoendencies are stored

const _ = require('lodash') // const _ means access everythinf in that require command

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)