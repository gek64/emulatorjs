# ceEmulator
- 基于`better-mock`的后端数据仿真器

## 安装方法

### 安装ceEmulator依赖
~~~shell
cd ceEmulator
npm install
~~~

### 将`test.js` 复制到你的项目根目录
~~~shell
cd ceEmulator
cp test.js /PATH_TO_YOUR_PROJECT/
~~~

### 修改你的项目根目录下的`test.js`中本模块引用地址
~~~javascript
const emulator = require('THE_PATH_TO_ceEmulator')
~~~

### 创建仿真器运行脚本
- 在你的项目中的`package.json`中添加`"test": "node test.js"`
~~~json
{
  "name": "your_project",
  "main": "index.js",
  "scripts": {
    "test": "node test.js"
  }
}
~~~

### 运行仿真器
~~~shell
npm run test
~~~

## 配置方法

### 在你的项目内配置`test.js`

~~~javascript
// 引入ceEmulator模块,确保已经按照安装方法中安装了模块的依赖
const emulator = require('./ceEmulator')

// 新建setup对象
let emu = new emulator.setup()

// 定义仿真器模板
// 具体参考 https://lavyun.gitee.io/better-mock/document/syntax-specification.html
let name = {
    'name': '@cname',
    'count|1-1000': 1
}

// 按照better-mock 模式处理模板
emu.set('/mock1', name)

// 在模板外套一层array,并定义内部object重复5次
// 忽略array的object
emu.set('/mock2', name, 5)

// 在模板外套一层array,并定义内部object重复随机5-100次
// 忽略array的object
emu.set('/mock3', name, 5, 100)

// 在80端口启动仿真器,如果不填或者不是端口则默认为端口5000
emu.start(80)

// 访问以下url以查看返回的json数据包
console.log('http://localhost/mock1')
console.log('http://localhost/mock2')
console.log('http://localhost/mock3')

~~~