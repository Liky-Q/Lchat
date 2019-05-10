/**
 * 服务端程序入口
 * 项目启动...
 */
const koa = require('koa');
const path = require('path');
const static = require('koa-static');
const config = require('./config.json');

const app = new koa();
let port = config.env.port; // 服务运行端口

// 前端页面存放目录
let webPath = '../web/dist';

app.use(static(path.join(__dirname, webPath)));

app.listen(port, () => {
    console.log('Lchat server is running at port', port);
});