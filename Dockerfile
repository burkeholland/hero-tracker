FROM node:6-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY ["server/package.json", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent && mv node_modules ../
COPY server/ /usr/src/app/
EXPOSE 3001
CMD npm start