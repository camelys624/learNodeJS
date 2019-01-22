const http = require('http');

const server = http.createServer();

server.on('request', function (req, res) {
    // 在服务端默认发送的数据，其实是utf8编码的内容
    // 但是浏览器不知道是utf-8的内容
    // 浏览器在不知道服务器响应内容的编码情况下会按照当前操作系统的默认编码去解析
    // 中文操作系统默认是GBK
    // 解决方法就是正确的告诉浏览器正确的解码


    const url = req.url;
    if(url === '/'){
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('hello 世界');
    } else if (url === '/html') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h2>hello NodeJS</h2>')
    }
});

// 可以开启多个服务，但是要确保多个服务占用的端口号不一致
server.listen(3000, function () {
   console.log('Server is running....');
});