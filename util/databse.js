const mysql = require('mysql2');

const pool = mysql.createPool({
    host:'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'Jasmin@0078'
});

module.exports = pool.promise();