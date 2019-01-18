// 浏览器中的JavaScript是没有文件操作能力的
// 但是Node中的JavaScript具有文件操作的能力


// fs是file-system的简写，就是文件系统的意思
// 在node中如果想要进行文件操作，就必须引入fs这个核心模块
// 例如fs.readFile就是用来读取文件的

// 1. 使用require方法加载fs核心模块
var fs = require('fs');

// 2. 读取文件
//    第一个参数就是要读取的文件路径
//    第二个参数是一个回调函数
//    error
//      如果读取失败，error就是错误对象
//      如果读取成功，error就是null
//    data
//      如果读取成功，data就是读取到的数据
//      如果读取失败，error就是错误对象
//
//      成功
//          data 数据
//          error null
//      失败
//          data null
//          error 错误对象
fs.readFile('./data/hello.txt', function (err, data) {
    // <Buffer 68 65 6c 6c 6f>
    // 文件中存储的都二进制数据 0 1
    // 这里看到的是二进制转换为16进制了
    // 无论是二进制还是16进制，人类都无法识别
    // 所以我们可以通过toString方法把其转为我们能认识的数据
    if(err){
        console.log('读取文件失败');
    }else {
        console.log(data.toString());
    }
})