/*
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: Jvan
 * @Date: 2020-05-14 14:26:52
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-09 14:29:21
 */ 
let path = require('path');

//日志根目录
let baseLogPath = path.resolve(__dirname, '../logs')

//错误日志目录
let errorPath = "/error";
//错误日志文件名
let errorFileName = "error";
//错误日志输出完整路径
let errorLogPath = baseLogPath + errorPath + "/" + errorFileName;
// let errorLogPath = path.resolve(__dirname, "../logs/error/error");


//响应日志目录
let responsePath = "/response";
//响应日志文件名
let responseFileName = "response";
//响应日志输出完整路径
let responseLogPath = baseLogPath + responsePath + "/" + responseFileName;
// let responseLogPath = path.resolve(__dirname, "../logs/response/response");


//数据库日志
let sqlPath = "/sql";
//响应日志文件名
let sqlFileName = "sql";
//响应日志输出完整路径
let sqlLogPath = baseLogPath + sqlPath + "/" + sqlFileName;
// let responseLogPath = path.resolve(__dirname, "../logs/sql/sql");


module.exports = {
    "appenders":{
        error: {
            "category":"errorLogger",             //logger名称
            "type": "dateFile",                   //日志类型
            "filename": errorLogPath,             //日志输出位置
            "alwaysIncludePattern":true,          //是否总是有后缀名
            "pattern": "-yyyy-MM-dd-hh.log",      //后缀，每小时创建一个新的日志文件
            "path": errorPath  
        },
        response: {
            "category":"resLogger",
            "type": "dateFile",
            "filename": responseLogPath,
            "alwaysIncludePattern":true,
            "pattern": "-yyyy-MM-dd-hh.log",
            "path": responsePath,
        },
        sqlponse: {
            "category":"resLogger",
            "type": "dateFile",
            "filename": sqlLogPath,
            "alwaysIncludePattern":true,
            "pattern": "-yyyy-MM-dd-hh.log",
            "path": sqlPath,
        }
    },
    "categories" : { 
        error: { appenders: ['error'], level: 'error' },
        response: { appenders: ['response'], level: 'info' },
        sqlponse: { appenders: ['sqlponse'], level: 'info' },
        default: { appenders: ['response'], level: 'info' },
    }
}