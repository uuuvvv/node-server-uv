var mysql  = require('mysql');

// 连接数据库的配置
var sqlConnection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'zhl123@',
  database:'test'
})

module.exports = sqlConnection;
