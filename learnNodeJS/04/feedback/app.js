const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use('/public/', express.static('./public'));
app.use('/node_modules/', express.static('./node_modules'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// 配置使用 art-template 模板引擎，具体去官网看
// 第一个参数表示，当渲染以 .art 结尾的文件的时候，使用 art-template 模板引擎
// 虽然此处不用加载 art-template 但是也必须安装，因为这个模块需要原生的支持
// 如果不想加载 art ，可以将 art 换为 html
// app.engine('art', require('express-art-template'));
app.engine('html', require('express-art-template'));

// 如果想要修改默认的 views 目录，则可以
// app.set('views', 新的路径);

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

// Express 为 response 提供了一个方法： render
// render 默认不可以使用，如果配置了模板引擎就可以使用
// res.render('html模板名', {模板数据})
// 第一个参数不能写路径，默认会去项目中的 views 目录查找该模板文件
// 这是规范，需要把所有的文件放到 views 文件目录下
app.get('/', function (req, res) {
    // res.send('index');
    res.render('index.html',{ comments })
 });

app.get('/post', function (req, res) {
    // res.send('post');
    res.render('post.html')
});

app.get('/home', function (req, res) {
    // readFile 的第二个参数是可选的，传入 utf8 就是告诉它把读取到的文件直接按照 utf8 的方式编码
    // 除了这样来转换之外，也可以通过 data.toString() 的方式
    fs.readFile('./db.json', 'utf8', function (err, data) {
       if (err) {
           return res.status(500).send('Server error.');
           // res.render('404.html');
       }else {
           res.render('home.html', {
               students: JSON.parse(data).student
           })
           // console.log(data);
       }
    });
});

// app.get('/msg', function (req, res) {
//     // res.send('post');
//     const comment = req.query;
//     comment.dateTime = (new Date()).toLocaleDateString();
//     comments.unshift(comment);
//     // res.statusCode = 302;
//     // res.setHeader('Location', '/');
//     res.redirect('/');  // express 自带API
// });

// 当以 POST 请求 /post 的时候，执行指定的处理函数
// 这样我们就可以利用不同的请求方法让一个请求路径多次使用
app.post('/post', function (req, res) {
    // 1. 获取表单请求体数据
    // 2. 处理
    // 3. 发送响应

    // req.query只能拿 get 请求的参数
    const comment = req.body;
    comment.dateTime = (new Date()).toLocaleDateString();
    comments.unshift(comment);
    // console.log(req.body);
    res.redirect('/');  // express 自带API
});

app.listen(3000, function () {
    console.log('node is running...');
});