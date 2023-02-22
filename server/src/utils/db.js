const mysql2 = require('mysql2');



const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root',
    database: 'resume-app',
    waitForConnections: true,
    connectionLimit: 10,
    maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
    idleTimeout: 60000, // idle connections timeout, in milliseconds, the default value 60000
    queueLimit: 0
  })


module.exports = pool;