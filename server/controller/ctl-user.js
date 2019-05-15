let getUserInfo = async (ctx) => {
    console.log('1002');
    ctx.body = '<h2>1002</h2>'
}

module.exports = {
    'GET /v1/user/info': getUserInfo
}