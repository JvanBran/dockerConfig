/*
 * @Descripttion: 
 * @version: 0.0.1
 * @Author: Jvan
 * @Date: 2020-06-29 18:46:30
 * @LastEditors: sueRimn
 * @LastEditTime: 2020-06-30 09:19:58
 */ 

const NacosNamingClient = require('nacos').NacosNamingClient;
const logger = console;
const client = new NacosNamingClient({
    logger,
    serverList: process.env.nacosIP,
    namespace: process.env.nacosNameSpace,
});
const nacos = async () => {
    await client.ready()
    await client.registerInstance(process.env.nacosServiceName,{
        ip:process.env.appIP,
        port:process.env.appPort
    },process.env.nacosGroupName)
    client.subscribe(process.env.nacosServiceName, hosts => {
        console.log(hosts);
      });
}
module.exports = nacos