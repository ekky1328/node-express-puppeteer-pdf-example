FROM buildkite/puppeteer:latest
WORKDIR /app
COPY . .
EXPOSE 3000
CMD [ "npm", "run", "start" ]