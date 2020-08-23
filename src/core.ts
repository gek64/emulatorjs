import Mock = require('better-mock');
import Overload = require('./overload');

// 获取随机整数
function getRndInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min)) + min
}

// 仿真器核心,重载多个函数
function Setup() {
    Overload.addMethod(this, 'set', function (template) {
        return Mock.mock(template)
    })
    Overload.addMethod(this, 'set', function (template, n) {
        if (Array.isArray(template)) {
            console.log('warning ' + template + ' is a array')
        }
        let temp = []
        for (let i = 0; i < n; i++) {
            temp.push(template)
        }
        return Mock.mock(temp)
    })
    Overload.addMethod(this, 'set', function (template, min, max) {
        if (Array.isArray(template)) {
            console.log('warning ' + template + ' is a array')
        }
        let temp = []
        for (let i = 0; i < getRndInteger(min, max); i++) {
            temp.push(template)
        }
        return Mock.mock(temp)
    })
}

export = {
    Setup,
    getRndInteger
}