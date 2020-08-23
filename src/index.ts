import express = require('express');
import cors = require('cors');
import core = require('./core');
import Overload = require('./overload');


// 默认仿真器端口
const defaultServerPort: number = 5000
const app = express()
const emu = new core.Setup()

// 仿真器 设置器
function Setter() {
    Overload.addMethod(this, 'configure', function (url, template) {
        app.use(url, cors(), function (req, res, next) {
            res.send(emu.set(template))
            next()
        })
    })
    Overload.addMethod(this, 'configure', function (url, template, n) {
        app.use(url, cors(), function (req, res, next) {
            res.send(emu.set(template, n))
            next()
        })
    })
    Overload.addMethod(this, 'configure', function (url, template, min, max) {
        app.use(url, cors(), function (req, res, next) {
            res.send(emu.set(template, min, max))
            next()
        })
    })
}

//启动仿真器
function start(port: number) {
    if (!isPort(port)) {
        port = defaultServerPort
    }
    app.listen(port)
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

export = {
    Setter,
    start
}