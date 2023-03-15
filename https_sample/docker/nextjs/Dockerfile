# base image
FROM node:16.3.0-alpine

# set working directory
WORKDIR /app

# copy package.json and package-lock.json
COPY ../../package*.json ./

#yarn.lockをコピーする場合
COPY ../../yarn.lock ./

# install dependencies
#RUN npm install

# yarnを使う場合
RUN yarn

RUN yarn install

# copy source files
COPY ../.. .

# build the app
RUN yarn build

# expose port 3000
EXPOSE 3000

# start the app
CMD ["npm", "start"]
