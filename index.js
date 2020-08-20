const express = require('express')

// https://github.com/expressjs/cors 引入cors中间件解决跨域访问问题
const cors = require('cors')

// 获取自定义的mock中间件
const mock = require('./mock')

const defaultServerPort = 5000

let app = express()

app.use(cors())


let setServer = function (url, template) {
    app.use(url, function (req, res, next) {
        res.json(mock.newData(template))
        next()
    })
}

let startServer = function (p) {
    let port = defaultServerPort
    if (!isNaN(p)) {
        port = p
    }
    app.listen(port, function () {
        console.log('mock server started, visit at http://127.0.0.1:' + port)
    });
}

module.exports = {
    setServer,
    startServer
}