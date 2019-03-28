FROM mycs/base-testcafe:latest

COPY package*.json ./

RUN npm install --production && \
 npm cache verify && \
 rm -rf /tmp/*

COPY . .

RUN chmod +x scripts/test-runner.sh

EXPOSE 1337 1338

CMD ["scripts/test-runner.sh"]