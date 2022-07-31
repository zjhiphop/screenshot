Screenshot 
==========

A NodeJS tool help to generate screenshot of mobile device to stream or image file

### Features
1. Restful API to call out-of-the box
2. Support Stream or Image file


### Deps
* NodeJS v14.17.0+
* Puppeteer
* Koa2


### Demo
```
curl --location --request POST 'localhost:3000/api/v1/screenshot' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "url":"https://baidu.com",
    "tid": "test"
}'
```