const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    password:'Emilio',
    port: 3306,
    database: 'blog_act9'
});


global.db = pool.promise();