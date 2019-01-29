## 在 Express 中获取表单 POST 请求体数据

在 Express 中没有内置获取表单 POST 请求体的 API，这里我们需要使用一个第三方包 `body-parser`。

安装：

```shell
npm install --save body-parser
```

配置：

```javascript
const bodyParser = require('body-parser');

// 配置 body-parser
// 只要加入这个配置，则在 req 请求对象上会多出来一个属性： body
// 也就是说，可以直接通过 req.body 来获取表单 POST 请求体数据
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain');
  res.write('you posted:\n');
  res.end(JSON.stringify(req.body, null, 2));
})
```