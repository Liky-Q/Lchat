/**
 * 控制器，针对ajax请求进行逻辑分发
 */
const fs = require('fs');
const path = require('path');
const Router = require('koa-router');

/**
 * 根据文件名称和目录获取controller信息
 * 过滤ctl开头的文件
 */
let files = fs.readdirSync(__dirname);
let router = new Router();
files.forEach(file => {
    if(file.startsWith('ctl-')) {
        let mapping = require(path.join(__dirname, file));
        for(url in mapping) {
            let [method, path] = url.split(' ');
            switch(method) {
                case 'GET':
                    router.get(path, mapping[url]);
                    break;
                case 'POST':
                    router.post(path, mapping[url]);
                    break;
                case 'DELETE':
                    router.delete(path, mapping[url]);
                    break;
                case 'PUT':
                    router.put(path, mapping[url]);
                    break;
                default:
                    router.get(path, mapping[url]);
            }
        }
    }
});

module.exports = () => {
    return router.routes();
}