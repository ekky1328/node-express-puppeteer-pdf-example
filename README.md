# Puppeteer PDF Example

This is a Docker example of using Puppeteer to Generate PDF Documents.

![Animated example of this app](/public/example.gif)

## Docker Deployment

I've created a image for this example that can be found here [https://hub.docker.com/r/ctalke/node-express-puppeteer](https://hub.docker.com/r/ctalke/node-express-puppeteer).

```bash
docker pull ctalke/node-express-puppeteer
docker run -d -p 3000:3000 --restart unless-stopped ctalke/node-express-puppeteer
```

## Development Setup

Clone the repository, move into the directory, install all NPM Deps, and then crack open your editor.

```bash
git clone https://github.com/christopher-talke/node-express-puppeteer-pdf-example.git
cd node-expess-puppeteer-pdf-example
npm i
code .
```

To run the application in development, just run this command:

```bash
npm run dev
```

The Express application will open on `https://localhost:3000`

## Docker Build

```bash
docker build -t puppeteerInDocker .
docker run -p 3000:3000 puppeteerInDocker
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Be nice, and don't be like this guy: [Click Here](https://github.com/christopher-talke/node-express-puppeteer-pdf-example/issues/4)

## Author

[@Christopher Talke ](https://github.com/christopher-talke)

## Contributors

[@TMInnovations](https://github.com/TMInnovations)

## License

[MIT](https://choosealicense.com/licenses/mit/)
