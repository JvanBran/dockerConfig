const logUtil = require('../util/logUtil')
const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.sqlDatabase,process.env.sqlUserName,process.env.sqlPassWord,{
    host: process.env.sqlHost,  //数据库主机IP  localhost
    port: process.env.sqlPort,       
    dialect: process.env.sqlDialect,  //数据库类型   'mysql'|'mariadb'|'sqlite'|'postgres'|'mssql',
    logging: log,
    dialectOptions: {
        charset: "utf8",
        bigNumberStrings: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        // `timestamps` 字段指定是否将创建 `createdAt` 和 `updatedAt` 字段. 该值默认为 true
        timestamps: false
    },
    timezone: '+08:00' //东八时区
});
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

function log(e){
    //响应开始时间
    const ms = new Date()
    logUtil.logSqlponse(e, ms);
}
module.exports = {
    sequelize
}