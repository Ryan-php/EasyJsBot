const Colors = require('colors')
/* npm install colors */
/* If you don't have the dependent Colors you can install with this command */

const Main = require('../index.js')

exports.ErrorLog = (content) => {
    content.split('\n').forEach(s => {
        console.log(`${'[X]'.red} ${s}`)
    })
}

exports.SuccessLog = (content) => {
    content.split('\n').forEach(s => {
        console.log(`${'[✓]'.green} ${s}`)
    })
}

exports.WaitLog = (content) => {
    content.split('\n').forEach(s => {
        console.log(`${'[...]'.black} ${s}`)
    })
}
