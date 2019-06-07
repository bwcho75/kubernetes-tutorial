FROM node:carbon
EXPOSE 8080
RUN groupadd -r -g 2001 appuser && useradd -r -u 1001 -g appuser appuser
RUN mkdir /home/appuser && chown appuser /home/appuser
USER appuser
WORKDIR /home/appuser
COPY --chown=appuser:appuser server.js .
CMD node server.js > /home/appuser/log.out
