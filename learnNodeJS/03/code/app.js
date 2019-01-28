// 0. 安装
// 1. 引包
const express = require('express');

// 2. 创建服务器应用程序
//  也就是原来的 http.createServer

const app = express();

// 公开指定目录
// 只要这样做了，就可以直接通过 /public/xx 的方式访问 public 目录中的所有静态资源
// 在 Express 中开放资源就是一个 API 的事
app.use('/public/', express.static('./public/'));

// 当服务器收到 get 请求 '/' 的时候，执行回调处理函数
app.get('/', function (req, res) {
    res.send('hello express');
});

app.listen(3000, function () {
    console.log('app is running at port 3000');
});
