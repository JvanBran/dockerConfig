/*
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: Jvan
 * @Date: 2020-06-09 10:30:19
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-07-20 10:25:36
 */ 
module.exports = function (sequelize, DataTypes) {
    return sequelize.define('galaxy_log', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        version:{
            type: DataTypes.STRING(255),
            field: 'version',
            allowNull: true,
            comment: '系统版本'
        },
        category:{
            type: DataTypes.TEXT,
            field: 'category',
            allowNull: true,
            comment: '错误枚举'
        },
        logType:{
            type: DataTypes.TEXT('tiny'),
            field: 'logType',
            allowNull: true,
            comment: '日志类型'
        },
        url:{
            type: DataTypes.TEXT,
            field: 'url',
            allowNull: true,
            comment: '请求地址'
        },
        post:{
            type: DataTypes.TEXT,
            field: 'post',
            allowNull: true,
            comment: '请求参数'
        },
        path:{
            type: DataTypes.TEXT,
            field: 'path',
            allowNull: true,
            comment: '错误页面地址'
        },
        logInfo:{
            type: DataTypes.TEXT,
            field: 'logInfo',
            allowNull: true,
            comment: '日志信息'
        },
        deviceInfo:{
            type: DataTypes.TEXT,
            field: 'deviceInfo',
            allowNull: true,
            comment: '设备信息'
        },
        createdTime: {
            type: DataTypes.BIGINT(20),
            field: 'createdTime',
            allowNull: true,
            comment: '创建时间'
        }
    }, {
        // 如果为 true 则表的名称和 model 相同，即 user
        // 为 false MySQL创建的表名称会是复数 users
        // 如果指定的表名称本就是复数形式则不变
        freezeTableName: true,
        comment: "前端异常表",
    })
}