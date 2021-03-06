# Node.js第一天

## 上午总结

- Node.js是什么
    + Javascript运行时环境
    + 既不是语言也不是框架，他是一个平台
- Node.js中的JavaScript
    + 没有BOM、DOM
    + ECMAScript基本的JavaScript语言部分
    + 在Node中为JavaScript提供了一些服务器级别的API
        * 文件操作能力
        * http服务的能力
        
### 3.1 核心模块

Node为JavaScript提供了很多服务器级别的API，这些API绝大多数都被包装到了一个具名的核心模块中了。
例如文件操作的`fs`核心模块，http服务构建的`http`模块，`paht`路径操作模块、`os`操作系统信息模块。

### 3.2 第三方模块

第三方模块与核心模块使用方法一样，通过`const xxx = require('xxx)`来导入，只不过要通过`node install xxx`来安装。

### 3.3 自定义模块

自定义模块通过`const xxx = require('./xxx)`来引用，如果删除`./`则会报错，因为node会将其当作核心模块来引用。

## 下午总结

- Node 中的 JavaScript
    + Ecmascript
        * 变量
        * 方法
        * 数据类型
        * 内置对象
        * Array
        * Object
        * Date
        * Math
    + 模块系统
        * 在 Node 中没有全局作用域的概念
        * 在 Node 中，只能通过过 require 方法来加载执行多个JavaScript脚本文件
        * require 加载只能是执行其中的代码，文件与文件之间由于
        是模块作用域，所以不会又污染的问题
            - 模块完全是封闭的
            - 外部无法访问内部
            - 内部也无法访问外部
        * 模块作用域固然带来了一些好处，可以加载多个文件，可以完全避免变量命名
        冲突污染的问题
        * 但是某些情况下，模块与模块之间是需要通信的
        * 在每个模块中，都提供了一个对象:`exports`
        * 该对象默认是一个空对象
        * 你要做的就是把外部访问使用的成员手动挂载到`exports`接口对象中
        * 然后谁来`require`这个模块，谁就可以得到模块内部的`exports`接口对象
        * 还有其它的规则，以及如何在项目中去使用这种编程方式。
    + 核心模块
        * 核心模块是由 Node 提供的一个个的具名的模块，它们都有自己特殊的名称标识，例如
            - fs 文件操作模块
            - http 网络服务构建模块
            - os 操作系统信息模块
            - path 路径处理模块
        * 所有核心模块在使用的时候都必须先手动的使用`require`方法加载，然后才可以
        使用，例如
            - `const fs = require('fs);`
-http
    + require
    + 端口号
        * ip地址定位计算机
        * 端口号定位具体的应用程序
    + Content-Type
        * 服务器最好把每次响应的数据是什么内容类型都告诉客户端，而且要正确的告诉
        * 不同的资源对应的 Content-Type 是不一样。
        * 对于文本类型的数据，最好都加上编码，目的是防止中文乱码的问题
    + 通过网络发送文件
        * 发送的并不是文件，本质上来讲发送的是文件的内容
        * 当浏览器收到服务器响应的内容之后，就会根据你的 Content-Type 进行对应的解析处理
    