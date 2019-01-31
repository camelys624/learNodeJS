/**
 * student.js
 * 数据操作文件模块
 * 职责：操作文件中的数据，只处理数据，不关心业务
 */
const fs = require('fs');

const dbPath = './db.json';


/**
 * 获取所有学生列表
 * @return []
 * callback 中的参数
 *  第一个参数 err
 *      成功是 null
 *      失败是错误对象
 *  第二个参数是 data
 *      成功是 Array
 *      失败是 undefined
 *
 */
exports.find = function (callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return res.status(500).send('Server err.');
        }
        return callback(null, JSON.parse(data).students);
    })
};

// 添加保存学生
exports.save = function () {

};

// 更新学生
exports.update = function () {

};

// 删除学生
exports.delete = function () {

};