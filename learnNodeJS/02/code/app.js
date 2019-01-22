// app application 应用程序
// 为了让目录结构保持统一清晰，我们约定，把所有的 HTML文件都放到 views （视图）
// 为了方便的统一处理这些静态资源，所以，我们约定把所有的静态资源都存放到 public 目录

const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', function (req, res) {
   const url = req.url;
   if (url === '/') {
       fs.readFile('./views/index.html', function (err, data) {
           if (err) {
              return res.end('404 not fond');
           }
           res.end(data);

       })
   } else if (url.indexOf('/public/') === 0 || url.indexOf('/node_modules') === 0) {
       // 如果请求路径是以 /public/ 开头的，则我认为你要获取 public 中的某个资源
       // 所以我们就直接可以把请求路径当作文件路径来直接进行读取
       fs.readFile(`.${url}`, function (err, data) {
           if (err) {
               return res.end('文件请求失败');
           }
           res.end(data)

       })
   } else {
       fs.readFile('./views/404.html', function (err, data) {
           if(err) {
               return res.end('404 not found');
           }
           res.end(data);
       })
   }
});

server.listen(3000, function () {
    console.log('Server is running...');
});