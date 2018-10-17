FROM node:8
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install --silent
COPY . ./
ENTRYPOINT ["/usr/src/app/entrypoint.sh"]
EXPOSE 5000