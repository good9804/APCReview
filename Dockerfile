# build stage
FROM node:lts-alpine 

WORKDIR /app
COPY . .

RUN npm install

EXPOSE 4001

CMD ["node","review.js"]
