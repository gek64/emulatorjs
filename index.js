const express = require('express')
const cors = require('cors')
const mockController = require('./mockController')

//默认仿真器端口
const defaultServerPort = 5000
const app = express()

//设置仿真器路由
function set(url, template) {
    app.use(url, function (req, res) {
        res.json(mockController.emulator(template))
    })
}

//判断输入是否是一个端口
function isPort(port){
    if (Number.isInteger(port)){
        if (port>=0 && port<=65535){
            return true
        }
    }
    return false
}

//启动仿真器
function start(port) {
    //全局允许跨域访问
    app.use(cors())

    if (!isPort(port)){
        port = defaultServerPort
    }
    app.listen(port)
}

module.exports = {
    set,
    start,
    isPort,
}