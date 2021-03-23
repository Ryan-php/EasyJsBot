const Colors = require('colors')
# npm install colors

const Main = require('../index.js')

exports.error = (content) => {
    content.split('\n').forEach(s => {
        console.log(`${'[X]'.red} ${s}`)
    })
}

exports.success = (content) => {
    content.split('\n').forEach(s => {
        console.log(`${'[✓]'.green} ${s}`)
    })
}

exports.mod = (content) => {
    content.split('\n').forEach(s => {
        console.log(`${'[✓]'.green} ${s}`)
    })
}

exports.loading = (content) => {
    content.split('\n').forEach(s => {
        console.log(`${'[?]'.yellow} ${s}`)
    })
}

exports.loading = (content) => {
    content.split('\n').forEach(s => {
        console.log(`${'[...]'.black} ${s}`)
    })
}
