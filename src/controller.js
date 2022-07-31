const service = require('./service')

const screenshot = (ctx, next) => {
    return service.api.screenshot(ctx);
}

exports.api = {
    screenshot
}