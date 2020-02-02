# base image
FROM node:13

# create app directory
WORKDIR /usr/src/app

# install app dependencies
COPY package*.json ./

RUN npm install
# if building for production
# RUN npm -ci —only=production

# bundle app source
COPY . .

RUN npm run build
RUN npm install -g serve

#EXPOSE 3000
EXPOSE 5000

#CMD [“npm”,”start”]
#if building for production
CMD ["serve","-s","build"]
