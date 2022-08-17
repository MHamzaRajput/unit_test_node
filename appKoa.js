const Koa = require('koa');
const Router = require('koa-router');
const axios = require('axios').default;

const app = new Koa();
const router = new Router();

router.get('/hello', async (ctx, next) => {
	ctx.body = "hello world";
});

router.get('/random', async (ctx, next) => {
	const { data } = await axios.get('http://api.icndb.com/jokes/random');
	ctx.body = data;
});

app.use(router.routes());

module.exports = app;