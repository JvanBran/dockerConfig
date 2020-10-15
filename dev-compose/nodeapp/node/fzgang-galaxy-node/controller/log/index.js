const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const { galaxyLogModel } = require('../../modal/index');
const { resdata, errdata } = require('../../util/serve');
module.exports = {
    //增加日志
    createLog: async(reqBody) =>{
        try {
            await galaxyLogModel.create(reqBody)
            let respon = resdata(0, '',{});
            return respon;
        } catch (err) {
            throw new Error(err);
            return errdata(err);
        }
    },
    //查询日志
    getLog: async(reqBody) =>{
        try {
            let result = {};
            let criteria = {};
            const {pageNo, pageSize, apiurl, createTimes, logtype} = reqBody;
            const findData = {
                offset : (parseInt(reqBody.pageNo) - 1) * parseInt(reqBody.pageSize),
                limit : parseInt(reqBody.pageSize),
                where: criteria
            }
            if(apiurl){
                criteria['url'] = {
                    [Op.iLike]: '%' + apiurl + '%'
                }
            }else if(logtype){
                criteria['logType'] = {
                    [Op.like]: '%' + logtype + '%'
                }
            }else if(createTimes){
                const createTime = []
                createTimes.map(i=> {
                    createTime.push(parseInt(i))
                })
                criteria['createdTime'] = {
                    [Op.between]: createTime
                }
            }
            let data = await galaxyLogModel.findAndCountAll(findData)
            result.records = data.rows;
            result.total = data.count;
            result.current = parseInt(pageNo)
            const pageSizes = result.size = parseInt(pageSize)
            result.pages= Math.ceil(data.count / pageSizes)
            let respon = resdata(0, '查询成功',result);
            return respon;
        } catch (error) {
            throw new Error(error);
            return errdata(err);
        }
    }
}