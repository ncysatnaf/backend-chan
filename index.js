import koa from 'koa'
import router from 'koa-router'

const app = new koa()
let koarouter = router()
 

koarouter.get('/', async function(ctx, next){
  ctx.body = '<h1>Hello! This is my home page!</h1>'
})
koarouter.get('/about', async function(ctx, next){
  ctx.body = '<h1>My name is Vai!</h1>'
})

app.use(koarouter.routes()).use(koarouter.allowedMethods())


app.listen(8008)
console.log('koa listening on port 8008')