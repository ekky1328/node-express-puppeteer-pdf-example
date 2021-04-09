FROM buildkite/puppeteer:latest
WORKDIR /app
COPY . .
RUN npm i
EXPOSE 3000
CMD [ "npm", "run", "start" ]