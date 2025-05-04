FROM nginx:latest
ARG BUILD=dist/*
COPY ${BUILD} /usr/share/nginx/html/.
EXPOSE 80
