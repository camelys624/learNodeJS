// 1. 结合 fs 发送文件中的数据
// 2. Content-Type
//  http://tool.oschina.net/commonts
//  不同的资源对应的 Content-Type 是不一样的
//  图片不需要指定编码
//  一般为字符串数据才指定编码

const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', function (req, res) {
    const url = req.url;

    if (url === '/'){
        // 不能这样做
        // res.end('html字符串');

        // 我们要发送的还是在文件中的内容
        fs.readFile('./resource/index.html', function (err, data) {
            if (err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                res.end('文件读取失败，请稍后重试！');
            } else {
                // data默认是二进制数据，可以通过.toString转为我们能识别的字符串
                // res.end() 支持两种数据类型，一种是二进制，一种是字符串
                // 如果要对数据进一步处理，则需要toString一下
                res.end(data);
            }
        })
    } else if(url === '/gif'){
        fs.readFile('./resource/1.gif', function (err, data) {
            if(err) {
                res.setHeader('Content-Type', 'text/plain;charset=utf-8');
                res.end('文件读取失败，请稍后重试!');
            }else {
                res.setHeader('Content-Type', 'image/gif');
                res.end(data)
            }
        })
    }
});

server.listen(3000, function () {
   console.log('Server is running...');
});