/**
 * 服务端程序入口
 * 项目启动...
 */
const koa = require('koa');
const path = require('path');
const fs = require('fs');
const controller = require('./controller');
const static = require('koa-static');
const config = require('./config.json');

const app = new koa();
let port = config.env.port; // 服务运行端口


const httpServer = require('http').Server(app.callback());
// const io = require('socket.io')(httpServer);

const chat = require('socket.io')(httpServer);

app.use(async (ctx, next) => {
    ctx.body = {
        result: {
            code: 200,
            data: null,
            message: 'OK'
        }
    };
    await next();
})

// 静态页面存放目录
let webPath = '../web/dist';
app.use(static(path.join(__dirname, webPath)));
// http请求路由
app.use(controller());

httpServer.listen(port, () => {
    console.log('Lchat server is running at port', port);
});

// io.on('connection', (socket) => {
//     console.log('server: receive connection.');
//     fs.watch('../web/dist',(eventType,filename)=>{
//         if(eventType === 'change'){
//             socket.emit('getMsg','server发出的消息');
//             socket.on('send', data => {
//                 console.log('客户端返回', data);
//             });
//         }
//     });
// });
chat.on('connection', socket => {
    console.log('chat server: receive connection...');
    socket.on('send', data => {
        console.log('客户端返回：', data);
    });
    socket.emit('getMsg', 'from chat server...');
});