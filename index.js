const express = require('express')

// https://github.com/expressjs/cors 引入cors中间件解决跨域访问问题
const cors = require('cors')

// 获取自定义的mock中间件
const mock = require('./mock')

let startServer = function (url, template) {
    let app = express()
    // 所有路由设置为可跨域访问
    app.use(cors())
    app.use(url, function (req, res, next) {
        res.json(mock.newData(template))
        next()
    })
    app.listen('80', function () {
        console.log('visit: http://localhost' + url)
    })
}

module.exports = {
    startServer
}