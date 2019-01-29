const express = require('express');

// 1. 创建 app
const app = express();

// 当以 /public/ 开头的时候，去 ./public 目录中查找文件
app.use('/public/', express.static('./public'));

// 当省略第一个参数的时候，则浏览器地址路径可以通过省略 /public 的方式来访问，加上反而不行
// app.use(express.static('./public'));

// 路由其实就是一张表
// 这个表里面有具体的映射关系
app.get('/', function (req, res) {
    // res.end('hello world')
    res.send('hello world');
});

app.listen(3000, function () {
    console.log('app is running...');
});