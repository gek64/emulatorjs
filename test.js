let Emu = require('./index')
let Mock = require('better-mock')

let name = []
let url = '/mock/name'
let port = 80

for (let i = 0; i < Mock.Random.integer(1, 100); i++) {
    let obj = {
        'name': '@name',
        'count|1-1000': 1
    }
    name.push(obj)
}

Emu.set(url, name)
Emu.start(port)

console.log('http://localhost:%d%s', port, url)