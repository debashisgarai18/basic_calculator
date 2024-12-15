# this is needed to bootstrap the application
FROM node:16-alpine

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 5173

# this needs to be run when the container starts
CMD [ "npm", "run", "dev" ]