const Mock = require('mockjs')

let newData = function (des) {
    let data = Mock.mock({
        'list|1-10': [{
            'id|+1': 1,
            'name': '@name',
            'des': des
        }]
    })
    return data
}

module.exports = {
    newData: newData
}