const Router = require('koa-router');
const { index } = require('./controller/home');
const router = new Router();

module.exports = () => {
  router.get('/index', index);
}