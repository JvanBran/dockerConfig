//根据环境引用不同的环境变量
if(process.env.NODE_ENV == 'development'){
  const dotenv =  require('dotenv');
  dotenv.config('../env');
}

const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const nacos = require('./config/nacos')
const datalizeVerify = require('./middleware/datalizeVerify')
const apiRouter = require('./api/index')


// error handler
onerror(app)
// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(datalizeVerify()); //表单校验
app.use(require('koa-static')(__dirname + '/public'))


// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(apiRouter.routes(), apiRouter.allowedMethods());

// nacos()
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
