# 使用第三方工具 `nodemon`
我们使用第三方工具 `nodemon` 来帮我们解决频繁修改代码重启服务器地问题。

`nodemon` 是一个基于 Node.js 开发的一个第三方命令行工具，我们使用的时候需要独立安装：

```shell
npm install --global nodemon
```

安装完成后，使用：

```shell
node app-old.js

# node 变为 nodemon
nodemon app-old.js
```