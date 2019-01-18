var http = require('http');

var server = http.createServer();

// request请求事件处理函数，需要接收两个参数：
// Request请求对象
//  请求对象可以用来获取客户端的一些请求信息，例如请求路径
// Response响应对象
//  响应对象可以用来给客户端发送响应消息

server.on('request', function (req, res) {
    console.log('收到客户端请求了,请求路径是：' + req.url);

    // response对象有一个方法：write可以用来给客户端发送响应数据
    // write可以使用多次，但是最后一次一定要使用end来结束响应，否则客户端会一直等待
    res.write('hello ');
    res.write('Nodejs');
    res.end();
})

// 4. 绑定端口号，启动服务器
server.listen(3000, function () {
    console.log('服务器启动成功，可以通过http://127.0.0.1:3000/来访问.');
})