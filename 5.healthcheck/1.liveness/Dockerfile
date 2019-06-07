FROM node:carbon
EXPOSE 8080
COPY server.js .
COPY healthy /tmp/
CMD node server.js > log.out
