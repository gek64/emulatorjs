const emulator = require('./index')

const setter = new emulator.Setter

let obj = {
    'name': '@name'
}

setter.configureRandomArray('/', obj, 1, 10)
setter.start(80)