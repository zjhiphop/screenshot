const { getScreenshot } = require('./domain')
exports.api = {
    screenshot: async (ctx) => {
        console.log(typeof ctx.request.body,  ctx.request.body);

        const { url, tid, buffer} = typeof ctx.request.body == 'object' ? ctx.request.body : JSON.parse(ctx.request.body)

        const res = await getScreenshot(url, tid, buffer)
        console.log(res)
        if (res) {
            ctx.body = buffer ? res : {
                code: 200,
                message: '成功',
                data: res
            }
        }
    }
}