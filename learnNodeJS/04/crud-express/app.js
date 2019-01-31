/**
 * app.js 入门模板
 * 职责：
 *  创建服务
 *  做一些服务相关的配置
 *      模板引擎
 *      body-parser 解析表单 post 请求体
 *      提供静态资源服务
 *  挂载路由
 *  监听端口启动服务
 * @type {createApplication}
 */

const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router');

const app = express();

app.use('/public/', express.static('./public'));
app.use('/node_modules/', express.static('./node_modules'));

// 配置模板引擎和 body-parser 一定要在挂载路由以前
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.engine('html', require('express-art-template'));

// 把路由容器挂在到 app 服务中
app.use(router);
// router(app);

app.listen(3000, function () {
    console.log('node is running...');
});