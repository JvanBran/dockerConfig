const db = require('../../config/sequelize');
const { sqlClass } = require('../utils');
const Sequelize = db.sequelize
const GalaxyLog = Sequelize.import('../../schema/log/galaxy_log')
GalaxyLog.sync({force: true});
class GalaxyLogModel extends sqlClass{
    constructor(){
        super()
        this.sqlModel = GalaxyLog;
        this.dataType = {
        }
    }
}
let galaxyLogModel = new GalaxyLogModel()
module.exports = {
    galaxyLogModel:galaxyLogModel
}