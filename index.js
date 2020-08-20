const express = require('express')
const cors = require('cors')
const Mock = require('better-mock')

// 仿真器核心,依靠模板返回json
function emulator(template) {
    return Mock.mock(template)
}


// 默认仿真器端口
const defaultServerPort = 5000
const app = express()

// 设置仿真器路由
function set(url, template) {
    // 设置路由,并设置跨域访问
    app.use(url, cors(), function (req, res, next) {
        res.send(emulator(template))
        next()
    })
}

// 判断输入是否是一个端口
function isPort(port) {
    if (Number.isInteger(port)) {
        if (port >= 0 && port <= 65535) {
            return true
        }
    }
    return false
}

// 启动仿真器
function start(port) {
    if (!isPort(port)) {
        port = defaultServerPort
    }
    app.listen(port)
}

module.exports = {
    set,
    start,
    isPort,
}