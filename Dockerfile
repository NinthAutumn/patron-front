FROM node:14.17
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
# Install app dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
# RUN npm install -g yarn
RUN yarn

COPY . /usr/src/app
RUN yarn build 
EXPOSE 8080

CMD ["yarn", "start"]
