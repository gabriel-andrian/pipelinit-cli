FROM debian:11-slim
#FROM alpine:latest

COPY bin/pipelinit-0.1.0-rc.4-x86_64-unknown-linux-gnu /pipelinit

VOLUME ["/app"]

WORKDIR /app

ENTRYPOINT ["/pipelinit"]
