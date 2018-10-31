FROM node:carbon as base
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm i npm@latest -g && npm install && npm i -g nodemon
EXPOSE 8088
ARG APP_ENV
ENV APP_ENV ${APP_ENV}
CMD ["nodemon", "server/index.js"]
