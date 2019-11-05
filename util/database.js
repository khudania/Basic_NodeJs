// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node-app',
//     password: 'admin'
// });

// module.exports = pool.promise();


const Sequelize = require('sequelize')

const sequelize = new Sequelize('node-app', 'root', 'admin', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;