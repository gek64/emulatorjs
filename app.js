const express = require('express')
// https://github.com/expressjs/cors 引入cors中间件解决跨域访问问题
const cors = require('cors')
// 获取自定义的mock中间件
const mock = require('./mock')
// 获取自定义的axios中间件
const axios = require('./axios');

let app = express()

// 所有路由设置为可跨域访问
app.use(cors())

app.use('/mock', function (req, res) {
    res.json(mock.newData('mock生产的数据'))
})

app.listen('80', () => {
    console.log('http://127.0.0.1:80')
})

module.exports = {
    newData: mock.newData,
    getUrl: axios.getUrl
}