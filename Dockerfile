# write on nodejs image
FROM node:lts-alpine

# working directory
WORKDIR /app

# install dependencies
COPY package*.json ./
RUN npm ci

# copy whole src files
COPY . .

ENV NEXT_PUBLIC_API_URL="https://api.cmshforum.com"

# build app
RUN npm run build

# open port 3000 to connect
EXPOSE 3000

# run app
CMD ["npm", "start"]
