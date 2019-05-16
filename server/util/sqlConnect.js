const mysql = require('mysql');
const config =  require('../config');

const pool = mysql.createPool(config.env.database);

let connect = function ([sql,value = null]) {
    return new Promise((resolve,reject)=>{
        pool.getConnection(function (err,connection) {
            if (err){
                reject(err);
            } else {
                connection.query(sql,value,(err,rows)=>{
                    if(err){
                        reject(err);
                    }else{
                        resolve(rows);
                    }
                    connection.release();
                })
            }
        })
    })

}

module.exports = {
    connect
}

