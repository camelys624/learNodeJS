var fs = require('fs');

// 第一个参数： 文件路径
// 第二个参数： 文件内容
// 第三个参数： 回调函数

// 成功：
//  error是null
// 失败
//  error就是错误对象
fs.writeFile('./data/你好.md', '大家好，我是Node.js', function (err) {
    if(err){
        console.log('文件写入失败');
    }else {
        console.log('文件写入成功');
    }
    // console.log(err);
})