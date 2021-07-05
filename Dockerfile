FROM node:13.2.0

WORKDIR /src

COPY . .

RUN yarn

EXPOSE 3000
CMD [ "yarn", "start" ]
