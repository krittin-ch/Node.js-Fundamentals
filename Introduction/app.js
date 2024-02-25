// npm - global command, come with node.js
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency = use it in any project (the global dependcy will not appear in the package.json but will be usable)
// npm install -g <pavkageName>
// npm install -g <pavkageName> (mac)

// package.json - manifest file (tores important info about project/package)
// manual appraoch (create package.json in the root, create propertiees etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// folder node_modules is where all the deoendencies are stored

// modify package.json from

// "scripts": {
//     "test": "echo \"Error no test specified\" && exit 1"
// }

// to
// "scripts": {
//     "start": "node Introduction/app.js"
// }

// and run with npm start (or npm run start or npm run dev, depending on the scripts setup in package.json)

const _ = require('lodash') // const _ means access everythinf in that require command

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)