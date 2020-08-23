const express = require('express')
const cors = require('cors')
const core = require('./core')

// 默认仿真器端口
const defaultServerPort = 5000
const app = express()
const Core = new core.Core


class Setter {
    configure(url, template) {
        app.use(url, cors(), function (req, res, next) {
            res.send(Core.configure(template))
            next()
        })
    }

    configureArray(url, template, count) {
        app.use(url, cors(), function (req, res, next) {
            res.send(Core.configureArray(template, count))
            next()
        })
    }

    configureRandomArray(url, template, min, max) {
        app.use(url, cors(), function (req, res, next) {
            res.send(Core.configureRandomArray(template, min, max))
            next()
        })
    }

    start(port) {
        if (!isPort(port)) {
            port = defaultServerPort
        }
        app.listen(port)
    }
}

// // 重载Setter
// function Setter() {
//     Overload.addMethod(this, 'configure', function (url, template) {
//         app.use(url, cors(), function (req, res, next) {
//             res.send(Core.configure(template))
//             next()
//         })
//     })
//     Overload.addMethod(this, 'configure', function (url, template, count) {
//         app.use(url, cors(), function (req, res, next) {
//             res.send(Core.configure(template, count))
//             next()
//         })
//     })
//     Overload.addMethod(this, 'configure', function (url, template, min, max) {
//         app.use(url, cors(), function (req, res, next) {
//             res.send(Core.configure(template, min, max))
//             next()
//         })
//     })
//     //启动仿真器
//     Overload.addMethod(this, 'start', function (port) {
//         if (!isPort(port)) {
//             port = defaultServerPort
//         }
//         app.listen(port)
//     })
// }

// 判断输入是否是一个端口
function isPort(port) {
    if (Number.isInteger(port)) {
        if (port >= 0 && port <= 65535) {
            return true
        }
    }
    return false
}

module.exports = {
    Setter
}