const router = require('koa-router')()
const publicInterface = require('./public/index')
router.use('/public', publicInterface.routes(), publicInterface.allowedMethods());
module.exports = router