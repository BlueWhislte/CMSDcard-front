# write on nodejs image
FROM node:latest

# working directory
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm install

# copy whole src files
COPY . .

# build app
RUN npm run build

# open port 3000 to connect
EXPOSE 3000

# run app
CMD ["npm", "start"]