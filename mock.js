const Mock = require('mockjs')

// 自定义模板
// let template = {
//     'list|1-10': [{
//         'id|+1': 1,
//         'name': '@name'
//     }]
// }

let newData = function (template) {
    let data = Mock.mock(template)
    return data
}

module.exports = {
    newData
}