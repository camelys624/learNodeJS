var http = require('http');

// 1. 创建Server
var server = http.createServer();

// 2. 监听request请求事件，设置请求处理函数
server.on('request', function (req, res) {
    console.log('收到请求了，请求地址是' + req.url);

    // 每次都write比较麻烦，推荐使用直接end的同时发送响应数据
    // res.end('hello NodeJS');

    // 根据不同的请求路径发送不同的响应结果
    // 1. 获取请求路径
    //  req.url获取到的是端口号之后的那一部分路径
    //  也就是说所有的url都是以/开头的
    // 2. 判断路径处理响应

    const url = req.url;

    // if (url === '/'){
    //    res.end('index page');
    // } else if (url === '/login') {
    //     res.end('login page');
    // } else {
    //     res.end('404 Not Found');
    // }

    if(url === '/product') {
        const product = [
            {name: '苹果', price: 8848},
            {name: '梨子', price: 8848},
            {name: '橙子', price: 8848},
            {name: '菠萝', price: 8848},
            {name: '辣椒', price: 8848},
        ];

        // 响应内容必须是二进制数据或者字符串
        // 数字、对象、数组、布尔值都不可以
        res.end(JSON.stringify(product));
    }
});

// 3. 绑定端口号，启动服务
server.listen(3000, function () {
    console.log('服务启动成功了');
});

