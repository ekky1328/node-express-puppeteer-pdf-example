FROM buildkite/puppeteer:latest

WORKDIR /app
COPY . .

RUN npm install

EXPOSE 3000
CMD [ "npm", "run", "start" ]