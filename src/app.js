const Koa = require('koa');
const app = new Koa();
const router = require('./router');
var bodyParser = require('koa-body-parser');


// app.use(async ctx => {
//   ctx.body = 'Hello World';
// });

app.use(bodyParser());
app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(3000);