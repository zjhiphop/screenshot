FROM alpine:edge

RUN apk add --no-cache \
    chromium \
    nss \
    freetype \
    harfbuzz \
    ca-certificates \
    ttf-freefont \
    nodejs \
    yarn

ENV PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true \
    PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser \ 
    QTWEBENGINE_DISABLE_SANDBOX=1

RUN echo "https://mirrors.aliyun.com/alpine/edge/testing/" >> /etc/apk/repositories \
    && apk -U --no-cache update && apk -U --no-cache --allow-untrusted add \
    chromium \
    nss \
    ca-certificates \
    wqy-zenhei \
    && rm -rf /var/cache/*

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN yarn install

# Bundle app source
COPY . .

EXPOSE 3000

CMD [ "node", "src/app.js" ]
