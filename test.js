const emulator = require('./index')

let emu = new emulator.setup()

let name = {
    'name': '@cname',
    'count|1-1000': 1
}

emu.set('/mock', name, 5, 100)

emu.start(80)

console.log('http://localhost/mock')
