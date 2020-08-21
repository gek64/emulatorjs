const express = require('express')
const cors = require('cors')
const core = require('./core')
const Overload = require('./overload')


// 默认仿真器端口
const defaultServerPort = 5000
const app = express()
const emu = new core.setup()

// 仿真器,重载多个函数
function setup() {
    Overload.addMethod(this, 'set', function (url, template) {
        app.use(url, cors(), function (req, res, next) {
            res.send(emu.set(template))
            next()
        })
    })
    Overload.addMethod(this, 'set', function (url, template, n) {
        app.use(url, cors(), function (req, res, next) {
            res.send(emu.set(template, n))
            next()
        })
    })
    Overload.addMethod(this, 'set', function (url, template, min, max) {
        app.use(url, cors(), function (req, res, next) {
            res.send(emu.set(template, min, max))
            next()
        })
    })
    //启动仿真器
    Overload.addMethod(this, 'start', function (port) {
        if (!isPort(port)) {
            port = defaultServerPort
        }
        app.listen(port)
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


module.exports = {
    setup,
}