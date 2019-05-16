const userDao = require('../dao/user');
const regs = require('../util');

const loginDao = async ({name,password}) => {
    if(!regs.name.test(name)){
        return '用户名不符合规则'
    }else if(!regs.password.test(password)){
        return ''
    }



    let userInfo = userDao.login(name,password)

}

module.exports = {
    loginDao : loginDao
}