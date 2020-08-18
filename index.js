const express = require('express')

// https://github.com/expressjs/cors 引入cors中间件解决跨域访问问题
const cors = require('cors')

// 获取自定义的mock中间件
const mock = require('./mock')

const serverPort = 3000

let app = express()

app.use(cors())


let setServer = function (url, template) {
    app.use(url, function (req, res, next) {
        res.json(mock.newData(template))
        next()
    })
}

let startServer = function () {
    let server = app.listen(serverPort, function () {
        console.log('mock server started')
    })
}

module.exports = {
    setServer,
    startServer
}