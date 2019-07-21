const userServer = require('../service/user');

const getUserInfo = async (ctx) => {
    console.log('1002');
    ctx.body = '<h2>1002</h2>'
}

const loginInfo = async (ctx) => {
    console.log(1234, ctx.request.body)
    let params = ctx.request.body;
    let loginInfo = await userServer.loginDao(params)
    ctx.body = loginInfo;
}


module.exports = {
    'POST /login': loginInfo,
    'GET /v1/user/info': getUserInfo
}