const sql = require('../util/sqlConnect');

const login = async (name, password) => {
    let queryOption = [
        'SELECT * FROM user WHERE username=? and password=?',
        [name,password]
    ];
    try{
        let loginResult =await sql.connect(queryOption);
        return loginResult;
    }catch (e) {
        return null;
    }
};



module.exports = {
    login: login
}