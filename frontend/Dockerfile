# FROM node:16-alpine

# WORKDIR /app/frontend

# COPY package*.json /app/frontend/

# RUN npm install 

# COPY . /app/frontend/

# CMD [ "npm", "start" ]

FROM node:14.17.3

WORKDIR /frontend

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]