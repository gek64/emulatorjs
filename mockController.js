const MockController = require('mockjs')

function emulator(template) {
    let data = MockController.mock(template)
    return data
}

module.exports = {
    emulator
}