FROM nginx:stable-alpine

RUN set -e  \
    && apk add nodejs npm

COPY dist /usr/share/nginx/html

CMD ["nginx"]


