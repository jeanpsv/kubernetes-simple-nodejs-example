FROM node:8.1.2
EXPOSE 8080
COPY server.js .
CMD node server.js
