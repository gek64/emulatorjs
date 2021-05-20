# EmulatorJS
- NodeJS 后端API数据仿真器
- 集成了`better-mock`,可模板化生成对象
- 集成了`express`服务器可以直接启动`API`接口
- 完善了`[{},{}]`类型对象的生成功能
- 不断更新中!!!

## 安装方法

### 安装
~~~shell script
npm install emulatorjs
~~~

## 使用

### 实例

~~~shell script
// setup
mkdir demo && cd demo
npm install emulatorjs
touch emulator.js && nano emulator.js

// run
node emulator.js
~~~

#### emulator.js
~~~javascript
// 引入emulatorjs模块
const emulator = require('emulatorjs')

// 新建setter对象
const setter = new emulator.Setter

// 定义仿真器模板
// 具体参考 https://lavyun.gitee.io/better-mock/document/syntax-specification.html
let person = {
    'name': '@name',
    'age|0-200': 1
}

// 第一个参数是仿真API的URL,第二个参数是仿真器模板,默认接受所有HTTP支持的方法
setter.configure('/mock1', person)

// 外部默认使用[]包裹内部{},无需定义外部[]自动添加,5表示内部{}模板定义的object重复出现5次,其余同上
setter.configureArray('/mock2', person, 5)

// min=5 max=100随机出现5-100次,其余同上
setter.configureRandomArray('/mock3', person, 5, 100)

// 在5000端口启动仿真器,默认为端口5000
setter.start(5000)

// 访问以下url以查看返回的json数据包
console.log('1 person,visit at '+'http://localhost:5000/mock1')
console.log('5 persons,visit at '+'http://localhost:5000/mock2')
console.log('5~100 persons,visit at '+'http://localhost:5000/mock3')
~~~

## About
- Feel free to send me issues at [github](https://github.com/vivye/emulatorjs)
