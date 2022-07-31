const puppeteer = require('puppeteer');
const path = require('path')

// https://github.com/puppeteer/puppeteer/blob/main/src/common/DeviceDescriptors.ts
const iphone12 = puppeteer.devices['iPhone 12 Pro'];

exports.getScreenshot = async (url, fileName, useBuffer=false) => {

  console.log(url);
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  //设置可视区域大小,默认的页面大小为800x600分辨率
  //   await page.setViewport({width, height})
  await page.emulate(iphone12);
  await page.goto(url)
  //对整个页面截图
  const imgBuffer = await page.screenshot({
      path: useBuffer ? null : path.resolve(__dirname + `/../screenshots/${fileName}.jpeg`),  //图片保存路径
      type: 'jpeg',
      quality: 50,
      fullPage: true //边滚动边截图
  })
  
  //执行cos 或 oss 脚本，把图片上传到cdn环境，此处由于调试，暂时省略

  await page.close()
  await browser.close()

  return useBuffer ? imgBuffer : `${fileName}.jpeg`
}