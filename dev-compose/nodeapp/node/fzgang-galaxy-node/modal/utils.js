class sqlClass{
    async create(dataArr) {
        const self = this;
        return await self.sqlModel.create(dataArr) 
    }
    async findAndCountAll(dataArr){
        const self = this;
        return await self.sqlModel.findAndCountAll(dataArr)
    }
}

module.exports = {
    sqlClass:sqlClass
}