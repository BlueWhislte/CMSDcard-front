# write on nodejs image
FROM node:latest

# working directory
WORKDIR /app

# install dependencies
COPY package*.json .
RUN npm install

# copy whole src files
COPY . .

# build app
RUN npm run build

# run app
CMD ["npm", "start"]