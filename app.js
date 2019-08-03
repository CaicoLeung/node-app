const Koa        = require('koa');
const Router     = require('koa-router');
const bodyParser = require('koa-bodyparser');
const app        = new Koa();
const router     = new Router();

app.use(bodyParser());

router.get('/index', (ctx, next) => {
  console.log(ctx);
  ctx.body = "<h1 style='color: red;'>HOME page index</h1>";
});

router.post('/post', bodyParser(), (ctx, next) => {
  console.log(ctx);
  ctx.body = "<h1 style='color: red;'>Post</h1>"
});

app.use(router.routes())

app.listen(3000, err => {
  if (err) throw err;
  console.log("running at 3000");
});