FROM ubuntu:14.04
RUN apt-get update -qq && apt-get install curl -qqy && \
    curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - && \
    apt-get install -qqy nodejs

COPY package.json /app/package.json
COPY src /app/src

RUN cd /app && npm install

