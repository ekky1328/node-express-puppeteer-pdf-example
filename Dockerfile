FROM buildkite/puppeteer:latest
WORKDIR /app
COPY . .
<<<<<<< HEAD
RUN npm i
=======

RUN npm install

RUN apt install -y libgobject-2.0.so.0 libglib-2.0.so.0 libnss3.so libnssutil3.so libsmime3.so libnspr4.so libatk-1.0.so.0 libatk-bridge-2.0.so.0 libcups.so.2 libdrm.so.2 libdbus-1.so.3 libgio-2.0.so.0 libxcb.so.1 libxkbcommon.so.0 libX11.so.6 libXcomposite.so.1 libXdamage.so.1 libXext.so.6 libXfixes.so.3 libXrandr.so.2 libgbm.so.1 libgtk-3.so.0 libgdk-3.so.0 libpango-1.0.so.0 libcairo.so.2 libasound.so.2 libatspi.so.0 libxshmfence.so.1 \
    --no-install-recommends \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get purge --auto-remove -y curl \
    && rm -rf /src/*.deb

>>>>>>> 5f4cce25a175b5cfe8acf6f06fcc07f1fafff340
EXPOSE 3000
CMD [ "npm", "run", "start" ]