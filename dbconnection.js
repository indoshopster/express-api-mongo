const mysql = require('mysql');
const connection = mysql.createPool({

    host:'localhost',
    user:'root',
    password:'',
    database:'adiepw_api',
    port:3306

});

module.exports = connection;
