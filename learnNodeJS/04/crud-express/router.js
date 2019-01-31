/**
 * router.js 路由模块
 * 职责：
 *  处理路由
 *  根据不同的请求方法加请求路径设置具体的请求处理函数
 * 模块职责要清晰而单一
 * 我们划分模块的目的就是为了增强项目代码的可维护性
 * 提升开发效率
 */

// const fs = require('fs');
const student = require('./student');

// Express 提供了一种更好的方式
// 专门用来包装路由的
const express = require('express');

// 1. 创建一个路由容器
// 2. 把路由挂载到路由容器中
const router = express.Router();

router.get('/students', function (req, res) {
    // readFile 的第二个参数是可选的，传入 utf8 就是告诉它把读取到的文件直接按照 utf8 的方式编码
    // 除了这样来转换之外，也可以通过 data.toString() 的方式
    student.find(function (err, data) {
        if (err) {
            return res.render('404.html');
        }
        return res.render('home.html', {
            students: data
        })
    })
});

router.get('/students/new', function (req, res) {
    // res.send('post');
    res.render('new.html');
});

router.post('/students/new', function (req, res) {
    // 1. 获取表单数据
    // 2. 处理
    //      将数据保存到 db.json 文件中用以持久化
    // 3. 发送响应
    const comment = req.body;

    // 先读取出来，转成对象
    // 然后往对象中 push 数据
    // 然后把对象转为字符串
    // 然后把字符串写入文件
    res.redirect('/');  // express 自带API
});

router.get('/students/edit', function () {

});

router.post('/students/edit', function () {

});

router.get('/students/delete', function () {

});

// 3. 导出 router
module.exports = router;

// 这样也不方便
// module.exports = function (app) {
//     app.get('/students', function (req, res) {
//         // res.send('index');
//         res.render('index.html',{ comments })
//     });
//
//     app.get('/students/new', function (req, res) {
//         // res.send('post');
//         res.render('post.html')
//     });
//
//     app.get('/home', function (req, res) {
//         // readFile 的第二个参数是可选的，传入 utf8 就是告诉它把读取到的文件直接按照 utf8 的方式编码
//         // 除了这样来转换之外，也可以通过 data.toString() 的方式
//         fs.readFile('./db.json', 'utf8', function (err, data) {
//             if (err) {
//                 return res.status(500).send('Server error.');
//                 // res.render('404.html');
//             }else {
//                 res.render('home.html', {
//                     students: JSON.parse(data).student
//                 })
//                 // console.log(data);
//             }
//         });
//     });
//
//     // app.get('/msg', function (req, res) {
// //     // res.send('post');
// //     const comment = req.query;
// //     comment.dateTime = (new Date()).toLocaleDateString();
// //     comments.unshift(comment);
// //     // res.statusCode = 302;
// //     // res.setHeader('Location', '/');
// //     res.redirect('/');  // express 自带API
// // });
//
//     app.post('/post', function (req, res) {
//         const comment = req.body;
//         comment.dateTime = (new Date()).toLocaleDateString();
//         comments.unshift(comment);
//         // console.log(req.body);
//         res.redirect('/');  // express 自带API
//     });
// };