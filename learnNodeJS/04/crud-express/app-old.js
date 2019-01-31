// app application 应用程序
// 为了让目录结构保持统一清晰，我们约定，把所有的 HTML文件都放到 views （视图）
// 为了方便的统一处理这些静态资源，所以，我们约定把所有的静态资源都存放到 public 目录

const http = require('http');
const fs = require('fs');
const url = require('url');
const template = require('art-template');

let comments = [
    {
        name: '张三',
        message: '今天天气不错',
        dateTime: '2015-10-16'
    },
    {
        name: '张三1',
        message: '今天天气不错',
        dateTime: '2015-10-16'
    },
    {
        name: '张三2',
        message: '今天天气不错',
        dateTime: '2015-10-16'
    },
    {
        name: '张三3',
        message: '今天天气不错',
        dateTime: '2015-10-16'
    },
    {
        name: '张三5',
        message: '今天天气不错',
        dateTime: '2015-10-16'
    },
    {
        name: '张三6',
        message: '今天天气不错',
        dateTime: '2015-10-16'
    },
];


const server = http.createServer();

server.on('request', function (req, res) {
    // const url = req.url;
    // 使用 url.parse() 方法解析为一个方便操作的对象，第二个参数为 true 表示直接将查询字符串转为一个对象 (通过 query 属性来访问)
    const parseObj = url.parse(req.url, true);
    // 单独获取不包含查询路径查询字符串的部分
    const pathname = parseObj.pathname;

    if (pathname === '/') {
        fs.readFile('./views/index.html', function (err, data) {
            if (err) {
                return res.end('404 not fond');
            }
            const htmlStr = template.render(data.toString(), {
                comments
            });
            res.end(htmlStr);

        })
    } else if (pathname.indexOf('/public/') === 0 || pathname.indexOf('/node_modules') === 0) {
        // 如果请求路径是以 /public/ 开头的，则我认为你要获取 public 中的某个资源
        // 所以我们就直接可以把请求路径当作文件路径来直接进行读取
        fs.readFile(`.${pathname}`, function (err, data) {
            if (err) {
                return res.end('文件请求失败');
            }
            res.end(data)

        })
    } else if (pathname === '/post') {
        fs.readFile('./views/post.html', function (err, data) {
            if (err) {
                return res.end('404 not found');
            }
            res.end(data);
        })
    } else if(pathname === '/msg'){
        // 我们已经使用 url 的 parse 方法，将请求路径解析为一个对象
        // 所以接下来就是
        //  1. 获取表单提交的信息
        // 2. 将当前时间日期添加到数据对象中，然后存储到数组中
        // 3. 让用户重定向到首页
        //  当用户重新请求 / 的时候，数组重得数据已经发生了变化，所以用户看到的是新的数组

        const comment = parseObj.query;
        comment.dateTime = '2017-10-21';
        // comments.push(comment);
        comments.unshift(comment);  // 先进先出

        // 如何通过服务器让客户端重定向？
        //  1. 状态嘛设置为 302 临时重定向
        //  2. 在响应头中通过 Location 告诉客户端往哪儿重定向
        //      statusCode
        // 如果客户端发现收到服务器的响应状态码是 302 就会自动去相应头中找 Loacation
        // 所以你就能看到客户端自动跳转了

        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
    } else {
        fs.readFile('./views/404.html', function (err, data) {
            if (err) {
                return res.end('404 not found');
            }
            res.end(data);
        })
    }
});

server.listen(3000, function () {
    console.log('Server is running...');
});

// 主要学习了
// 1. /index.html
// 2. 开放 public 目录中的静态资源
//      当请求 /public/xxx 时，读取响应 public 目录中的具体资源
// 3. /post 响应 post.html
// 4. /msg
//      4.1 接收表单提交数据，存储表单数据
//      4.2  让表单重定向到 /
//          statusCode
//          setHeader

