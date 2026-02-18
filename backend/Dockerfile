FROM node:25.6.1

WORKDIR /app

COPY . .

RUN npm install -y

EXPOSE 4000

ENTRYPOINT ["/bin/sh", "-c"]

CMD ["npm run serve"]