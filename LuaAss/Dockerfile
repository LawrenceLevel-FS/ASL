FROM alpine:latest

RUN apk update && apk add lua5.3 && ln -s /usr/bin/lua5.3 /usr/bin/lua && rm -rf /var/cache/apk/*

WORKDIR /usr/src/luaapp

COPY . .

CMD ["lua", "main.lua"]


