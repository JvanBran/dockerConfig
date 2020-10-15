const router = require('koa-router')()
const datalize = require('datalize');
const  { createLog, getLog } = require('../../controller/log/index');
const field = datalize.field;
router
.post('/log',async (ctx, next) => {
  let reqBody = ctx.request.body;
  ctx.body = await createLog(reqBody);
})
.post('/getlog',datalize([
    field('pageNo').required(), //当前页码
    field('pageSize').required(), //页面条数
  ]),async (ctx, next) => {
    let reqBody = ctx.request.body;
    ctx.body = await getLog(reqBody);
})
module.exports = router