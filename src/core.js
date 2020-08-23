const Mock = require('better-mock')

// 获取随机整数
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

class Core {
    configure(template) {
        return Mock.mock(template)
    }

    configureArray(template, count) {
        let temp = []
        for (let i = 0; i < count; i++) {
            temp.push(template)
        }
        return Mock.mock(temp)
    }

    configureRandomArray(template, min, max) {
        let temp = []
        for (let i = 0; i < getRndInteger(min, max); i++) {
            temp.push(template)
        }
        return Mock.mock(temp)
    }
}

// // 重载Core
// function Core() {
//     Overload.addMethod(this, 'configure', function (template) {
//         return Mock.mock(template)
//     })
//     Overload.addMethod(this, 'configure', function (template, count) {
//         let temp = []
//         for (let i = 0; i < count; i++) {
//             temp.push(template)
//         }
//         return Mock.mock(temp)
//     })
//     Overload.addMethod(this, 'configure', function (template, min, max) {
//         let temp = []
//         for (let i = 0; i < getRndInteger(min, max); i++) {
//             temp.push(template)
//         }
//         return Mock.mock(temp)
//     })
// }

module.exports = {
    Core
}