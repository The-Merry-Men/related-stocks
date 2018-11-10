FROM node:10.12.0

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
RUN npm install
# RUN npm run docker-seed
EXPOSE 3009
CMD [ "node", "server.js" ]



# add run seed in this file 