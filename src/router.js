// router层
const screenshotControllers = require('./controller')
const KoaRouter = require('@koa/router');

const router = new KoaRouter()
router.post('/api/v1/screenshot', screenshotControllers.api.screenshot)

module.exports = router;